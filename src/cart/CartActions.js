

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const cartActions = {
   addProduct: (product) => ({ type: ADD_PRODUCT_TO_CART, product }),    
   removeItem: (item) => ({ type: REMOVE_PRODUCT_FROM_CART, item })
}

