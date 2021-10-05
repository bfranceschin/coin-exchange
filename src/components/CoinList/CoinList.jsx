import React from 'react'
import styled from 'styled-components';
import Coin from '../Coin/Coin';

const Table = styled.table `
  font-size: 1rem;
`;

export default function CoinList (props) {
  return (
    <Table className="table table-primary table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.slice(props.firstCoin, props.firstCoin + props.count).map(value => {
              return <Coin 
                    key={value.key ? value.key : value.ticker} 
                    handleRefresh = {props.handleRefresh} 
                    handleTransaction = {props.handleTransaction}
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
