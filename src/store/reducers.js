
export const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.data];
        default:
            return state
    }
};

export const productsList = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST':
            return [...state, ...action.data];
        default:
            return state
    }
};
