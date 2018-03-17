import { PRODUCTS_FETCH_SUCCESS, STORE_FETCH_SUCCESS } from "./ProductActions";

const intialState = {}

export function productReducer(state = intialState, action) {
    switch (action.type) {
      case PRODUCTS_FETCH_SUCCESS:      
        return { ...state, products: action.products };
      case STORE_FETCH_SUCCESS:
        return { ...state, stores: action.stores }  
      default:
        return state;
    }
  }