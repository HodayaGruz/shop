import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import CartRow from './CartRow';
import TotalSum from './TotalSum';

const Wrapper = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    grid-area: side;
    display: flex;
    @media (min-width: 700px) {
        overflow: auto;
        flex-direction: column
    }
`;

const List = styled.div`
    flex: 1;
`;
const EmptyPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: side;
    padding: 20px
`;
const Text = styled.div``;

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
            <div style={{marginBottom: 80}}/>
            <TotalSum/>
        </Wrapper>
    )
}

export default Sidebar
