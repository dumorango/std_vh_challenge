import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from ".";

const intialState = {
    items: []
}

const hasItem = (items, product) => items.find((i) => i.product.id === product.id);

const increaseItemQuantity = (items, product) => 
    items.map(
        (i) => i.product.id === product.id ? ({ ...i, quantity: i.quantity + 1}) : i 
    );

const addProduct = (items, product) =>
    hasItem(items, product) ? increaseItemQuantity(items, product) : [ ...items, { quantity: 1, product } ]

const removeProduct = (items, product) =>
    items.filter((i) => i.product.id !== product.id);

export function cartReducer(state = intialState, action) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:      
        return {...state, items: addProduct(state.items, action.product) }
      case REMOVE_PRODUCT_FROM_CART:
        return {...state, items: removeProduct(state.items, action.item.product) };
      default:
        return state;
    }
  }