import './App.css';
import React, { Component } from 'react'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import {v4 as uuidv4} from 'uuid';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {key: uuidv4(), name: "Bitcoin",      ticker: "BTC",  price: 60000},
        {key: uuidv4(), name: "Ethereum",     ticker: "ETH",  price: 5000},
        {key: uuidv4(), name: "Tether",       ticker: "USDT", price: 1.000},
        {key: uuidv4(), name: "Ripple",       ticker: "XRP",  price: 0.2},
        {key: uuidv4(), name: "Bitcoin Cash", ticker: "BCH",  price: 612.0},
      ],
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh (changeValueTicker)
  {
    // const coin = this.state.coinData.find(c => c.ticker === changeValueTicker);
    // console.log(coin);
    let refreshedData = this.state.coinData.map( function({ticker, price, name, key}) {
      let newPrice = price;
      if (ticker === changeValueTicker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = price * randomPercentage;
      }
      return {
        name,
        key,
        ticker,
        price: newPrice,
      };
    })
    this.setState({coinData: refreshedData});
  }
  render() {
    return (
      <div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </div>
    );
  }
}

