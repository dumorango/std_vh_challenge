import { getAllStores } from './StoreService';

import { push } from 'react-router-redux';

export const STORE_FETCH_SUCCESS = 'STORE_FETCH_SUCCESS';

export const storeActions = {
  goToStoreProducts: (store) => push(`/stores/${store.id}`),
  getAllStores: () => async (dispatch) => {
      const stores = await getAllStores();
      dispatch({
        type: STORE_FETCH_SUCCESS,
        stores
    });
  }
};

