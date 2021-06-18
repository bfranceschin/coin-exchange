import './App.css';
import React, { Component } from 'react'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header';
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
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );
  }
}

