import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Card = styled.div`

`;

const Catalog = () => {

    const products = useSelector(({productsList}) => productsList);

    return (
        <Wrapper>
            {
                products && products.map(product => <Card>{product.name}</Card>)
            }
        </Wrapper>
    )
}

export default Catalog;
