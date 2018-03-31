import React, { Component } from 'react';

import './App.css';

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";
import {ConnectedRouter, push} from "react-router-redux";

import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/store';

import { LoginPage } from './login';
import { ToolbarContainer } from './toolbar';
import { StoreContainer, StorePage } from './store';
import { OrderContainer } from "./order";
import * as axios from "axios/index";

const history = createHistory();

const { store, persistor } = configureStore(history, {});

store.subscribe(() => {
    const session = store.getState().login.session;
    session
        ? axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().login.session}`
        : goToLogin()
});


const goToLogin = () =>
    history.location.pathname !== Routes.LOGIN && store.dispatch(push(Routes.LOGIN));

export const Routes = {
    LOGIN: "/login",
    STORES: "/stores",
    STORE: "/stores/:storeId",
    ORDERS: "/orders"
};

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
                  <Route exact={true} path={Routes.LOGIN} component={LoginPage} />
                  <Route exact={true} path={Routes.STORES} component={StoreContainer} />
                  <Route exact={true} path={Routes.STORE} component={StorePage} />
                  <Route exact={true} path={Routes.ORDERS} component={OrderContainer} />
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
