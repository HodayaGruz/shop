import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, changeItemSum} from "../store/actions";
import {isInCartSelector} from "../store/selectors";
import {Button} from '../shared/components'
import Count from './Count';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 20px;
    // border: 1px solid #e01010;
    -webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.75);
`;
const Image = styled.img`
    flex: 1
`;
const Text = styled.div`
    padding: 20px 0 5px 0; 
    font-weight: bold;
`;
const Price = styled.div`
    padding-bottom: 20px; 
`;
const LastRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = ({image, id, name, price}) => {

    const dispatch = useDispatch();

    const isInCart = useSelector(state => isInCartSelector(state, id))
    const [counter, setCounter] = useState(0);

    console.log('isInCart', isInCart)
    const addItem = () => {
        isInCart && setCounter(0);
        dispatch(isInCart ? removeFromCart(id) : addToCart({id, count: counter || 1}))
    };

    const changeQuantity = (count) => {
        if (isInCart){
            dispatch(count ? changeItemSum({id, count}) : removeFromCart(id))
        } else {
            setCounter(count)
        }
    } 

    return (
        <Wrapper>
            <Image src={image}/>
            <Text>{name}</Text>
            <Price>{`${price} ₪`}</Price>
            <LastRow>
            <Count changeVal={changeQuantity} counter={counter} count={isInCart ? 1 : 0}/>
            <Button onClick={addItem}>{isInCart ? 'Remove' : 'Add'}</Button>
            </LastRow>
        </Wrapper>
    )
}

export default Card;
