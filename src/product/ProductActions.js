import { getAllProducts } from "../store/StoreService";

export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';

export const productActions = {
   getAllProducts: (storeId) => async (dispatch) => {
        const products = await getAllProducts(storeId);
        dispatch({
            type: PRODUCTS_FETCH_SUCCESS,
            products
        });
  }
};

