import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled, {createGlobalStyle} from 'styled-components';
import {getProductsList} from '../store/actions';
import {productList} from '../shared/mock';
import Catalog from './Catalog';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr ;
    grid-template-areas: 
      "header header"
      "side side"
      "main main" ;
  }
    height: 100vh;
    overflow: auto;
    margin-top: 90px;
    
    @media (min-width: 700px) {
        margin-top: 0px;
        overflow: hidden;
        grid-template-areas: 
      "header  header"
      "side main" ;
      }
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(({productsList}) => productsList);

    useEffect(() => {
        if (!products || products.length === 0){
            dispatch(getProductsList(productList));
        }
    }, []);

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Sidebar/>
            <Catalog/>
        </Wrapper>
    )
}

export default Home;
