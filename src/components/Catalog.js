import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import Card from './Card.js'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px
`;

const Catalog = () => {

    const products = useSelector(({productsList}) => productsList);

    return (
        <Wrapper>
            {
                products && products.map(product => <Card key={product.id} {...product}/>)
            }
        </Wrapper>
    )
}

export default Catalog;
