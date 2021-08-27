import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
    font-size: 1rem;
    text-align: left;
    padding: 0.5rem 0 0.5rem 0.5rem;
`;

export default function BottomControls (props) {
    return (
        <Section>
            <button onClick={props.handlePrevPage}>Previous Page</button>
            <button onClick={props.handleNextPage}>Next Page</button>
            <button onClick={props.handleLoadMoreCoins}>Load More</button>
            showing {props.firstCoin + 1} to {props.firstCoin + props.count}
        </Section>
    )
}

BottomControls.propTypes = {
    count: PropTypes.number.isRequired,
};