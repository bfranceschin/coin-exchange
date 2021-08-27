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
          <th>#</th>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Market Cap</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.slice(0, props.count).map(value => {
              return <Coin 
                    key={value.key ? value.key : value.ticker} 
                    handleRefresh = {props.handleRefresh} 
                    rank={value.rank} 
                    name={value.name} 
                    ticker={value.ticker} 
                    price={value.price}
                    market_cap={value.market_cap}
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
