import React, { Component } from 'react';

import './App.css';

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import configureStore from './redux/store';

import { LoginContainer } from './login';
import { HomeContainer } from './home';
import { ToolbarComponent } from './toolbar';

const history = createHistory();

const store = configureStore(history, {});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">            
                <ToolbarComponent />
                <div className="App-content">
                <Switch>      
                  <Route exact={true} path="/login" component={LoginContainer} />   
                  <Route exact={true} path="/" component={HomeContainer} />                               
                </Switch>
                </div>
          </div>
        </ ConnectedRouter>
      </ Provider>
    );
  }
}

export default App;
