import {productList} from '../mock'

const api = (method, url, body) => {
    return new Promise((resolve) => resolve());
}

export const getProducts = () => api('GET', 'products').then(() => productList)