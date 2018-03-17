import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers";

import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&    
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


function configureStore(history, initialState) {
  // configure middlewares
  const middlewares = [thunk, routerMiddleware(history)];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}

// export store singleton instance
export default configureStore;
