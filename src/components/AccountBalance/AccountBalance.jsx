import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    display: inline-block;
`;

const Button = styled.button `
    margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

const Balance = styled.div `
   min-widht: 150px; 
   margin: 0.5rem 0 0 2.5rem;
   font-size: 1.5rem;
   vertical-align: middle;
`

var formatter = Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance (props) {
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    const formatedAmount = formatter.format(props.amount);
    let balanceText = '\u00A0';
    if (props.showBalance) {
        balanceText = props.showBalance ? `Balance = ${formatedAmount}` : "";
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    return (
        <>
            <Balance>{balanceText}</Balance>
            <Section>
                <BalanceToggleButton className={buttonClass} onClick={props.handleShowBalance}>{buttonText}</BalanceToggleButton>
                <Button className={'btn btn-success'} onClick={props.handleHellicopter}>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
};