import './App.css';
import React, { useState, useEffect } from 'react'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import BottomControls from './components/BottomControls';
import axios from 'axios';
//import {v4 as uuidv4} from 'uuid';

//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
const INITIAL_COIN_COUNT = 10;

function formatPrice (price) {
  return parseFloat(Number(price).toFixed(2));
}

export default function App (props) {

  const [balance, setBalance] = useState(1000);
  const [showBalance, setShwoBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [coinCount, setCoinCount] = useState(INITIAL_COIN_COUNT);
  const [firstCoin, setFirstCoin] = useState(0);
  
  const componentDidMount = async () => {
    //console.log("componentDidMount");
    const coinsResponse = await axios.get('https://api.coinpaprika.com/v1/tickers');
    coinsResponse.data.sort(function (a, b) {return a.rank - b.rank;});
    let coinPriceData = coinsResponse.data.map(function(coin) {
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
        market_cap: formatPrice(coin.quotes.USD.market_cap),
        rank: coin.rank
      };
    })
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

  const handleTransaction = (isBuy, valueChanged) =>
  {
    console.log("handleTransaction", isBuy, valueChanged);
  }

  const handleShowBalance = () =>
  {
    let newShowBalance = !showBalance;
    setShwoBalance(newShowBalance);
  }

  const handleHellicopter = () =>
  {
    let newBalance = balance + 10;
    setBalance(newBalance);
  }

  const handleLoadMoreCoins = () =>
  {
    setCoinCount(coinCount + INITIAL_COIN_COUNT);
  }

  const handlePrevPage = () =>
  {
    setFirstCoin(Math.max(firstCoin - coinCount, 0));
  }

  const handleNextPage = () =>
  {
    setFirstCoin(firstCoin + coinCount);
  }

  return (
    <div className="App">
      <ExchangeHeader/>
      <AccountBalance amount={balance} showBalance={showBalance} handleShowBalance={handleShowBalance} handleHellicopter={handleHellicopter}/>
      <CoinList coinData={coinData} firstCoin={firstCoin} count={coinCount} handleRefresh={handleRefresh} handleTransaction={handleTransaction} showBalance={showBalance} />
      <BottomControls count={coinCount} firstCoin={firstCoin} handleLoadMoreCoins={handleLoadMoreCoins} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
    </div>
  );
}
