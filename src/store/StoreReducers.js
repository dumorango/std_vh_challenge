import { STORE_FETCH_SUCCESS } from "./StoreActions";
import {PRODUCTS_FETCH_SUCCESS} from "../product/ProductActions";

const intialState = {}

export function storeReducer(state = intialState, action) {
    switch (action.type) {
      case PRODUCTS_FETCH_SUCCESS:
        return { ...state, products: action.products };
      case STORE_FETCH_SUCCESS:
        return { ...state, stores: action.stores }  
      default:
        return state;
    }
  }