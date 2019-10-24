import React from 'react';
import './App.css';
import {BaseComponent} from "./Component/BaseComponent";
import { Provider } from 'react-redux';
import {reducer} from "./Reducers/reducers";
import {createStore} from "redux";
import applyMiddleware from "redux/src/applyMiddleware";
import thunk from 'redux-thunk'


function App() {

    const store = createStore(reducer,applyMiddleware(thunk));

  return (
    <div className="App">
        <Provider store={store}>
            <BaseComponent/>
        </Provider>
    </div>
  );

}

export default App;
