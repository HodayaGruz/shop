import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa'
import {productDataSelector} from '../../store/selectors';
import {removeFromCart} from '../../store/actions';
import {Button} from '../../shared/components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    marginBottom: 15px
`;

const Item = styled.div`
flex: 1
`;

const Name = styled.div`
flex: 2;
padding: 0 15px;
`;

const TrashIcon = styled(FaTrashAlt).attrs({
    size: `1.3rem`
})`
    flex: 1;
    cursor: pointer
`;

const Image = styled.img`
    max-width: 60px
`

const CartRow = ({id, count}) => {
    const itemData = useSelector((state) => productDataSelector(state, id))
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <Wrapper>
            <Item>
                <Image src={itemData.image}/>
            </Item>
            <Name>{itemData.name}</Name>
            <Item>{count}</Item>
            <Item>{count * itemData.price}</Item>
                <TrashIcon onClick={removeItem}/>
        </Wrapper>
    )
}

export default CartRow;
