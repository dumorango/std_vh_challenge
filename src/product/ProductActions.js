import { getAllProducts, getAllStores } from './ProductService';

export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const STORE_FETCH_SUCCESS = 'STORE_FETCH_SUCCESS';

export const productActions = {
   getAllProducts: (store) => async (dispatch) => {
        const products = await getAllProducts(store);
        dispatch({
            type: PRODUCTS_FETCH_SUCCESS,
            products
        });
  },
  getAllStores: () => async (dispatch) => {
      const stores = await getAllStores();
      dispatch({
        type: STORE_FETCH_SUCCESS,
        stores
    });
  }

}

