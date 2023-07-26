import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const CryptoChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'crypto-chart',
        type: 'line',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        decimalsInFloat: 2,
      },
    },
    series: [
      {
        name: 'Preço do Bitcoin',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/klines', {
          params: {
            symbol: 'BTCUSDT',
            interval: '1m',
            limit: 60,
          },
        });

        const data = response.data.map((candlestick) => ({
          x: new Date(candlestick[0]).getTime(),
          y: parseFloat(candlestick[4]),
        }));

        setChartData((prevData) => ({
          ...prevData,
          series: [{ ...prevData.series[0], data }],
        }));
      } catch (error) {
        console.error('Erro ao buscar dados do mercado:', error);
      }
    };

    fetchMarketData();

    const interval = setInterval(fetchMarketData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginLeft: '770px', marginTop: '-450px', marginRight: '30px' }}>
      <h2>Preço do BTC nos últimos 60 minutos</h2>
      <ApexCharts options={chartData.options} series={chartData.series} type="line" width={450} height={400} />
    </div>
  );
};

export default CryptoChart;
