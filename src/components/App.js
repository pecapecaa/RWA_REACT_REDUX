import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS
import Header from "./header";
import Home from "./home";
import Pretraga from "../containers/pretraga";
import Wine_item from "../containers/wine_item";

//REDUX
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

//SAGA
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga/sagas';

// REDUCER
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
    applyMiddleware(promiseMiddleware)
);
sagaMiddleware.run(mySaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/vinalista" component={Pretraga}></Route>
              <Route exact path="/vinalista/:id" component={Wine_item}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
