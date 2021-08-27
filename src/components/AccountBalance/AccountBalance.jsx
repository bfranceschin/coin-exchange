import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
    border: 1px solid white;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance (props) {
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    const balanceText = props.showBalance ? `Balance = ${props.amount}` : "";
    return (
        <Section>
            {/* Balance = ${props.amount}   */}
            {balanceText}
            <button onClick={props.handleShowBalance}>{buttonText}</button>
        </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
};