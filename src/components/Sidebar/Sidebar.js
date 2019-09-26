import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import CartRow from "./CartRow";

const Wrapper = styled.div``;
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
            {
                cart.map(item => <CartRow {...item}/>)
            }
        </Wrapper>
    )
}

export default Sidebar
