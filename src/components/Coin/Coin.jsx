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

const Coin = ({rank, name, ticker, price, market_cap, balance, showBalance, handleRefresh, tickerId}) => {
    const handleClick = (event) => {
        event.preventDefault();
        handleRefresh(tickerId);
    }
    return (
        <CoinRow>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{ticker}</td>
            <td>{price}</td>
            <td>{market_cap}</td>
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