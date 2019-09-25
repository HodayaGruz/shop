import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductsList} from '../store/actions';
import {productList} from "../shared/mock";
import Catalog from "./Catalog";

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(({productsList}) => productsList);

    useEffect(() => {
        if (!products || products.length === 0){
            dispatch(getProductsList(productList));
        }
    }, []);

    return (
        <Catalog/>
    )
}

export default Home;
