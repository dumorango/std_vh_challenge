import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from "./reducers";
import storage from 'redux-persist/lib/storage'

import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&    
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(history, initialState) {
  // configure middlewares
  const middlewares = [thunk, routerMiddleware(history)];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store)
  return { store, persistor };
}

// export store singleton instance
export default configureStore;
