import React from 'react';
import './App.css';
import {createStore} from "redux";
import { reducer } from "./Reducer/reducer";
import { Provider } from 'react-redux'
import {BaseComponent} from "./Component/BaseComponent";

function App() {

    let store = createStore(reducer)

      return (
        <Provider store={store}>
        <div className="App">
          <BaseComponent/>
        </div>
        </Provider>
      );
}

export default App;