import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState('')

  const getWeatherData = (latitude, longitude) => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '56eb5fbb7a49bd547093448d6faf6954',
          units: 'metric'
        }
      })
      .then(response => {
        const data = response.data
        setWeatherData(data)
      })
      .catch(error => {
        console.error(error)
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        getWeatherData(latitude, longitude)
        getLocationName(latitude, longitude)
      }, error => {
        console.error(error)
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  const getLocationName = (latitude, longitude) => {
    axios
      .get('https://api.openweathermap.org/geo/1.0/reverse', {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '56eb5fbb7a49bd547093448d6faf6954',
          limit: 1
        }
      })
      .then(response => {
        const data = response.data[0]
        const city = data.name
        const country = data.country
        setLocation(`${city}, ${country}`)
      })
      .catch(error => {
        console.error(error)
      })
  }

  if (!weatherData) {
    return (
      <div>
        <button onClick={getWeatherData}>Obter Dados do Tempo</button>
        <div>Carregando...</div>
      </div>
    );
  }

  return (
    <div>
      <h3>{location}</h3>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Umidade: {weatherData.main.humidity}%</p>
      <p>Tempo: {weatherData.weather[0].description}</p>
    </div>
  )
}

export default WeatherComponent
