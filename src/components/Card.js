import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {addToCart} from "../store/actions";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    boreder: 1px solid red;
`;
const Image = styled.img`
    flex: 1
`;
const Text = styled.div`
    padding: 20px 0; 
`;
const AddButton = styled.button`

`;


const Card = ({image, id, name, price}) => {

    const dispatch = useDispatch();

    const addItem = () => dispatch(addToCart({id, count: 1}));

    return (
        <Wrapper>
            <Image src={image}/>
            <Text>{name}</Text>
            <AddButton onClick={addItem}>Add</AddButton>
        </Wrapper>
    )
}

export default Card;
