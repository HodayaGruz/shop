import {createSelector} from 'reselect';

const selectCart = state => state.cart;
const selectProducts = state => state.productsList;
const selectedItem = (state, id) => state.cart && state.cart.find(product => product.id === id)
const selectedProductItem = (state, id) => state.productsList && state.productsList.find(product => product.id === id)

export const isInCartSelector = createSelector([
    selectedItem
], (isInCart) => isInCart && isInCart);

export const productDataSelector = createSelector([
    selectedProductItem
], (product) => product);

export const totalSumSelector = createSelector([
    selectCart,
    selectProducts
], (cart, products) => 
    cart && cart.reduce((result, current) => {
        const product = products.find(pro => pro.id === current.id);
        return result + (current.count * product.price);
    }, 0)
)