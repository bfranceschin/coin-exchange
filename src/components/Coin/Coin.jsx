import React, { Component } from 'react'
import './Coin.css'
import PropTypes from 'prop-types';

export default class Coin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: props.name,
            ticker: props.ticker,
            price: props.price,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState) {
            return {
                price: oldState.price * randomPercentage,
            }
        })
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
            <tr className="coin-row">
                <td>{this.state.name}</td>
                <td>{this.state.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};