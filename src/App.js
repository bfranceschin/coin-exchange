import './App.css';
import React, { Component } from 'react'
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

export default class App extends Component {
  state = {
    balance: 10000,
    coinData: [
      // {name: "Bitcoin",      ticker: "BTC",  price: 60000, balance: 0.5},
      // {name: "Ethereum",     ticker: "ETH",  price: 5000, balance: 4.5},
      // {name: "Tether",       ticker: "USDT", price: 1.000, balance: 1000},
      // {name: "Ripple",       ticker: "XRP",  price: 0.2, balance: 0},
      // {name: "Bitcoin Cash", ticker: "BCH",  price: 612.0, balance: 0},
    ],
    showBalance: false,
  }
  
  componentDidMount = async () => {
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
      };
    })

    //console.log(coinData);
    
    this.setState({coinData: coinPriceData});
  }
  componentDidUpdate = () => {
    console.log("componentDidUpdate");
  }
  handleRefresh = async (changeValueTickerId) =>
  {
    let response = await axios.get( tickerUrl + changeValueTickerId);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    let refreshedData = this.state.coinData.map((values) => {
      let newValues = {...values};
      if (newValues.key === changeValueTickerId) {
        newValues.price = newPrice;
      }
      return newValues;
    })
    this.setState({coinData: refreshedData});
  }

  handleShowBalance = () =>
  {
    let newShowBalance = !this.state.showBalance;
    this.setState({showBalance: newShowBalance});
  }

  render() {
    return (
      <div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance} />
      </div>
    );
  }
}

