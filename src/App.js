import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import firebase from 'firebase';
import Router from './Router';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

class App extends Component {


  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCAsOffuaGGMadHg8j3fbPL3O1Z4VaJca4',
      authDomain: 'manager-87cd0.firebaseapp.com',
      databaseURL: 'https://manager-87cd0.firebaseio.com',
      projectId: 'manager-87cd0',
      storageBucket: 'manager-87cd0.appspot.com',
      messagingSenderId: '450724242091'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, loggerMiddleware));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
