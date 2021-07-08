import './App.css';
import React, { Component } from 'react'
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
//import {v4 as uuidv4} from 'uuid';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {name: "Bitcoin",      ticker: "BTC",  price: 60000, balance: 0.5},
        {name: "Ethereum",     ticker: "ETH",  price: 5000, balance: 4.5},
        {name: "Tether",       ticker: "USDT", price: 1.000, balance: 1000},
        {name: "Ripple",       ticker: "XRP",  price: 0.2, balance: 0},
        {name: "Bitcoin Cash", ticker: "BCH",  price: 612.0, balance: 0},
      ],
      showBalance: false,
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleShowBalance = this.handleShowBalance.bind(this);
  }

  handleRefresh (changeValueTicker)
  {
    // const coin = this.state.coinData.find(c => c.ticker === changeValueTicker);
    // console.log(coin);
    let refreshedData = this.state.coinData.map( function({ticker, price, name, key, balance}) {
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
        balance,
      };
    })
    this.setState({coinData: refreshedData});
  }

  handleShowBalance ()
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

