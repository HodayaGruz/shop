
export const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.data];
        case 'REMOVE_CART':
            return state.filter(item => item.id !== action.data);
        case 'CHANGE_SUM':
            const tempState = [...state];
            const itemIndex = tempState.findIndex(item => item.id === action.data.id)
            if (itemIndex > -1) {
                tempState[itemIndex] = {...action.data}
            }
            return [...tempState];
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
