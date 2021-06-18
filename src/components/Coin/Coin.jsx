import React, { Component } from 'react'
//import './Coin.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

//.coin-row td {
//    border: 1px solid #cccccc;
//    width: 25vh;
//}

const CoinRow = styled.tr `
    td {
        border: 1px solid #cccccc;
        width: 25vh;
    }
`;

export default class Coin extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        console.log("TESTETESTE");
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
        // const randomPercentage = 0.995 + Math.random() * 0.01;
        // this.setState(function(oldState) {
        //     return {
        //         price: oldState.price * randomPercentage,
        //     }
        // })
    }
    
    /*
    componentDidMount () {
        const callBack = () => {
            const randomPercentage = 0.995 + Math.random() * 0.01;
            // wrong, you cannot alter the state directly
            // this.state.price = this.state.price * randomPercentage;
           this.setState(function(oldState) {
               return {
                   price: oldState.price * randomPercentage,
               }
           })
        }
        setInterval(callBack, 3000);
    }
    
    */
   
    render() {
        return (
            <CoinRow>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
                <td>
                    <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </td>
            </CoinRow>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};