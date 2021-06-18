import React, { Component } from 'react'
import logo from '../logo.svg';
import styled from 'styled-components';

const HeaderStyle = styled.header `
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const H1 = styled.h1 `
    font-size: 4rem;
    color: white;
`;

const ImgLogo = styled.img `
  height: 8rem;
  pointer-events: none;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <ImgLogo src={logo} alt="React logo" />
                <H1>
                    Coin Exchange
                </H1>
            </HeaderStyle>
        )
    }
}
