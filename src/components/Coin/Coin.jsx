//import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td `
    border: 1px solid #cccccc;
    width: 16vw;
`

const TDControls = styled.td `
    border: 1px solid #cccccc;
    width: 36vw;
`
const Button = styled.button `
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`

var formatter = Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
});

const Coin = ({rank, name, ticker, price, market_cap, balance, showBalance, handleRefresh, tickerId, handleTransaction}) => {
    const handleRefreshClick = (event) => {
        event.preventDefault();
        handleRefresh(tickerId);
    }
    const handleBuyClick = (event) => {
        event.preventDefault();
        const isBuy = true;
        handleTransaction(isBuy, tickerId);
    }
    const handleSellClick = (event) => {
        event.preventDefault();
        const isBuy = false;
        handleTransaction(isBuy, tickerId);
    }
    return (
        <tr>
            <TD>{rank}</TD>
            <TD>{name}</TD>
            <TD>{ticker}</TD>
            <TD>{formatter.format(price)}</TD>
            <TD>{formatter.format(market_cap)}</TD>
            <TD>{showBalance ? formatter.format(balance) : '-'}</TD>
            <TDControls>
                <form action="#" method="POST">
                <Button className={"btn btn-info"} onClick={handleRefreshClick}>Refresh</Button>
                <Button className={"btn btn-success"} onClick={handleBuyClick}>Buy</Button>
                <Button className={"btn btn-danger"} onClick={handleSellClick}>Sell</Button>
                </form>
            </TDControls>
        </tr>
    )
};

Coin.propTypes = {
     name: PropTypes.string.isRequired,
     ticker: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
 };

export default Coin;