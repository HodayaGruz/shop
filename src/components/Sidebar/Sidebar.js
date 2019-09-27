import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import CartRow from "./CartRow";
import TotalSum from "./TotalSum";

const Wrapper = styled.div`
    padding: 20px;
    overflow: auto;
    width: 100%;
    box-sizing: border-box;
    grid-area: side
`;

const List = styled.div`
`;
const EmptyPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text = styled.div`

`;

const Sidebar = () => {

    const cart = useSelector(({cart}) => cart);


    return (
        !cart || cart.length === 0 ?
            <EmptyPage>
                <Text>There are no items</Text>
            </EmptyPage>
            :
        <Wrapper>
            <List>
            {
                cart.map(item => <CartRow key={item.id} {...item}/>)
            }
            </List>
            <div style={{height: 80}}/>
            <TotalSum/>
        </Wrapper>
    )
}

export default Sidebar
