import React, { Component } from 'react'
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table `
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
      let titleRow;
      if (this.props.showBalance) {
        titleRow = <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Balance</th>
                    <th>Action</th>
                  </tr>
      }
      else {
        titleRow = <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>

      }
      
      return (
        <Table>
          <thead>
            {titleRow}
          </thead>
          <tbody>
            {
              //this.state.coinData.map(value => 
              //  //<Coin key={value.key} name={value.name} ticker={value.ticker} price={value.price} />
              //  <Coin {...value} />
              //)
                this.props.coinData.map(value => {
                    return <Coin 
                          key={value.key} 
                          handleRefresh = {this.props.handleRefresh} 
                          name={value.name} 
                          ticker={value.ticker} 
                          price={value.price}
                          balance={value.balance}
                          showBalance={this.props.showBalance}/>
                  }
                    //<Coin {...value} />
                )
            
            }
          </tbody>
        </Table>
        )
    }
}
