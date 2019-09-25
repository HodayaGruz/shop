export const addToCart = (data) => ({
    data: data,
    type: 'ADD_CART'
});

export const removeFromCart = (id) => ({
    data: id,
    type: 'REMOVE_CART'
});

export const changeItemSum = (data) => ({
    data,
    type: 'CHANGE_SUM'
});
export const getProductsList = (data) => ({
    data,
    type: 'GET_LIST'
});
