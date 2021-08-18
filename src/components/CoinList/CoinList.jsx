import React from 'react'
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table `
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList (props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map(value => {
              return <Coin 
                    key={value.key ? value.key : value.ticker} 
                    handleRefresh = {props.handleRefresh} 
                    name={value.name} 
                    ticker={value.ticker} 
                    price={value.price}
                    balance={value.balance}
                    showBalance={props.showBalance}
                    tickerId={value.key}/>
            }
          )
        
        }
      </tbody>
    </Table>
    )
}
