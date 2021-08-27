import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
    font-size: 1rem;
    text-align: left;
    padding: 0.5rem 0 0.5rem 0.5rem;
`;

export default function LoadMoreCoins (props) {
    return (
        <Section>
            <button onClick={props.handleLoadMoreCoins}>Load More</button>
            showing 1 to {props.count}
        </Section>
    )
}

LoadMoreCoins.propTypes = {
    count: PropTypes.number.isRequired,
};