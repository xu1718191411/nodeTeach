import React from 'react';
import './App.css';
import {BaseComponent} from "./Component/BaseComponent";
import { Provider } from 'react-redux';
import {reducer} from "./Reducers/reducers";
import {createStore} from "redux";


function App() {

    const store = createStore(reducer);

  return (
    <div className="App">
        <Provider store={store}>
            <BaseComponent/>
        </Provider>
    </div>
  );

}

export default App;
