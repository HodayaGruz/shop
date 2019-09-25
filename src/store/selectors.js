import {createSelector} from 'reselect';

export const selectedItem = (state, id) => state.cart && state.cart.find(product => product.id === id)

export const isInCartSelector = createSelector([
    selectedItem
], (isInCart) => isInCart && isInCart);
