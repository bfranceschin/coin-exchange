import './App.css';
import React, { useState, useEffect } from 'react'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import axios from 'axios';
//import {v4 as uuidv4} from 'uuid';

const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
const COIN_COUNT = 10;

function formatPrice (price) {
  return parseFloat(Number(price).toFixed(2));
}

export default function App (props) {
  // state = {
  //   balance: 10000,
  //   coinData: [
  //     // {name: "Bitcoin",      ticker: "BTC",  price: 60000, balance: 0.5},
  //     // {name: "Ethereum",     ticker: "ETH",  price: 5000, balance: 4.5},
  //     // {name: "Tether",       ticker: "USDT", price: 1.000, balance: 1000},
  //     // {name: "Ripple",       ticker: "XRP",  price: 0.2, balance: 0},
  //     // {name: "Bitcoin Cash", ticker: "BCH",  price: 612.0, balance: 0},
  //   ],
  //   showBalance: false,
  // }

  const [balance, setBalance] = useState(1000);
  const [showBalance, setShwoBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  
  const componentDidMount = async () => {
    console.log("componentDidMount");
    const coinsResponse = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = coinsResponse.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const promises = coinIds.map(id => axios.get( tickerUrl + id));
    let coinData = await Promise.all(promises);
    let coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
        market_cap: formatPrice(coin.quotes.USD.market_cap)
      };
    })

    //console.log(coinData);
    
    //this.setState({coinData: coinPriceData});
    setCoinData(coinPriceData);
  }

  const componentDidUpdate = () => {
    console.log("componentDidUpdate");
  }

  useEffect(function() {
    if (coinData.length === 0) {
      //component did mount
      componentDidMount();
    }
    else {
      // component update
      componentDidUpdate();
    }
  })

  const handleRefresh = async (changeValueTickerId) =>
  {
    let response = await axios.get( tickerUrl + changeValueTickerId);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newMarketCap = formatPrice(response.data.quotes.USD.market_cap);
    let refreshedData = coinData.map((values) => {
      let newValues = {...values};
      if (newValues.key === changeValueTickerId) {
        newValues.price = newPrice;
        newValues.market_cap = newMarketCap;
      }
      return newValues;
    })
    setCoinData(refreshedData);
  }

  const handleShowBalance = () =>
  {
    let newShowBalance = !showBalance;
    setShwoBalance(newShowBalance);
  }

  return (
    <div className="App">
      <ExchangeHeader/>
      <AccountBalance amount={balance} showBalance={showBalance} handleShowBalance={handleShowBalance}/>
      <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance} />
    </div>
  );
}
