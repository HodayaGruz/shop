import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';
import {productDataSelector} from '../../store/selectors';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.div`
flex: 1
`;

const CartRow = ({id, count}) => {
    const itemData = useSelector((state) => productDataSelector(state, id))

    return (
        <Wrapper>
            <Item>{itemData.name}</Item>
        </Wrapper>
    )
}

export default CartRow;
