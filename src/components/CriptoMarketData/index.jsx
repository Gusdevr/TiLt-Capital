import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerMarket = styled.div`
  position: absolute;
  bottom: 180px;
  left: 280px;
`;

const CryptoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CryptoListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

const CryptoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CryptoMarketData = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const responseTopCryptos = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );

        const cryptoIcons = {
          bitcoin: 'BTC',
          ethereum: 'ETH',
          litecoin: 'LTC',
          ripple: 'XRP',
          dash: 'DASH',
          // Adicione outros ícones conforme necessário
        };

        const dataWithIcons = responseTopCryptos.data.map((crypto) => ({
          ...crypto,
          symbol: cryptoIcons[crypto.id] || crypto.symbol,
        }));

        setMarketData(dataWithIcons);
      } catch (error) {
        console.error('Erro ao buscar dados do mercado:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <ContainerMarket>
      <CryptoList>
        <h1>Mercado</h1>
        {marketData.map((coin) => (
          <CryptoListItem key={coin.id}>
            <CryptoIcon src={coin.image} alt={coin.symbol} />
            {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
          </CryptoListItem>
        ))}
      </CryptoList>
    </ContainerMarket>
  );
};

export default CryptoMarketData;
