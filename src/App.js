import React, { Component } from 'react';

import './App.css';

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/store';

import { LoginContainer } from './login';
import { ToolbarContainer } from './toolbar';
import { StoreContainer } from './store';
import { ProductContainer } from './product';
import { CartContainer } from "./cart";
import { OrderContainer } from "./order";
import * as axios from "axios/index";

const history = createHistory();

const { store, persistor } = configureStore(history, {});

store.subscribe(() =>
    axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().login.session}`
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div className="App">            
                <ToolbarContainer />
                <div className="App-content">
                <Switch>      
                  <Route exact={true} path="/login" component={LoginContainer} />   
                  <Route exact={true} path="/stores" component={StoreContainer} />
                  <Route exact={true} path="/:storeId/products" component={ProductContainer} />
                  <Route exact={true} path="/cart" component={CartContainer} />
                  <Route exact={true} path="/orders" component={OrderContainer} />
                </Switch>
                </div>
          </div>
        </ ConnectedRouter>
       </PersistGate>
      </ Provider>
    );
  }
}

export default App;
