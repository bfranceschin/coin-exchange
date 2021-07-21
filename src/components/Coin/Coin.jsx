import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.tr `
    td {
        border: 1px solid #cccccc;
        width: 25vh;
    }
`;

export default class Coin extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.tickerId);
    }
    
    render() {
        let name = <td>{this.props.name}</td>;
        let ticker = <td>{this.props.ticker}</td>;
        let price = <td>{this.props.price}</td>;
        let balance = <td>{this.props.balance}</td>;
        let button = <td>
                          <form action="#" method="POST">
                          <button onClick={this.handleClick}>Refresh</button>
                          </form>
                      </td>

        if (this.props.showBalance) {
            return (
                <CoinRow>
                    {name}
                    {ticker}
                    {price}
                    {balance}
                    {button}
                </CoinRow>
            )
        }
        else {
            return (
                <CoinRow>
                    {name}
                    {ticker}
                    {price}
                    {button}
                </CoinRow>
            )
        }
        
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};