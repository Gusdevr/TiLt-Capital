import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoData = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,litecoin,solana',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });

        setCryptoList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {cryptoList.map(crypto => (
        <div key={crypto.id} style={{ margin: '100px 10px', textAlign: 'center' }}>
          <img src={crypto.image} alt={crypto.name} width="32" height="32" />
          <h2>{crypto.name}</h2>
          <p>Preço: ${crypto.current_price}</p>
          <p>Variação 24h: {crypto.price_change_percentage_24h}%</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoData;

