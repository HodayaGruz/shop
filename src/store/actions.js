export const addToCart = (id) => ({
    data: id,
    type: 'ADD_CART'
});

export const getProductsList = (data) => ({
    data,
    type: 'GET_LIST'
});
