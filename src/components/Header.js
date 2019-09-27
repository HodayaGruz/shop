import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    z-index: 100;
    background-color: white;
    align-items: center;
    justify-content: center;
    grid-area: header;
    padding: 20px;
    position: fixed;
    top: 0;
    width: 100%;
    -webkit-box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.75);
    @media (min-width: 700px) {
        position: initial;
    }
`;
const Title = styled.div`
    font-weight: bold;
    font-size: 2rem;
    color: #e01010;
`;
const Header = () => {

    return (
        <Wrapper>
            <Title>My Mini Shop</Title>
        </Wrapper>
    )


}

export default Header;