//import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.tr `
    td {
        border: 1px solid #cccccc;
        width: 25vh;
    }
`;

// export default class Coin extends Component {
//     handleClick = (event) => {
//         event.preventDefault();
//         this.props.handleRefresh(this.props.tickerId);
//     }
    
//     render() {
//         let name = <td>{this.props.name}</td>;
//         let ticker = <td>{this.props.ticker}</td>;
//         let price = <td>{this.props.price}</td>;
//         let balance = <td>{this.props.balance}</td>;
//         let button = <td>
//                           <form action="#" method="POST">
//                           <button onClick={this.handleClick}>Refresh</button>
//                           </form>
//                       </td>

//         return (
//                 <CoinRow>
//                     {name}
//                     {ticker}
//                     {price}
//                     {this.props.showBalance ? balance : null}
//                     {button}
//                 </CoinRow>
//             )
        
        
//     }
// }

const Coin = ({name, ticker, price, balance, showBalance, handleRefresh, tickerId}) => {
    const handleClick = (event) => {
        event.preventDefault();
        handleRefresh(tickerId);
    }
    return (
        <CoinRow>
            <td>{name}</td>
            <td>{ticker}</td>
            <td>{price}</td>
            {showBalance ? <td>{balance}</td> : null}
            <td>
                <form action="#" method="POST">
                <button onClick={handleClick}>Refresh</button>
                </form>
            </td>
        </CoinRow>
    )
};

Coin.propTypes = {
     name: PropTypes.string.isRequired,
     ticker: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
 };

export default Coin;