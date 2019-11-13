import * as React from 'react'
import * as ReactDom from 'react-dom'
import {BaseComponent} from "./Components/BaseComponent";
import {createStore} from "redux";
import {State} from "./States/States";
import * as Reducer from "./Reducer/Reducer";
import {Provider} from "react-redux";

export const main = () => {
    const element = document.createElement('root-react');
    document.body.appendChild(element);
    ReactDom.render(createApp(),element);
}


function createApp(){
    const store = createStore<State, any, any, any>(Reducer.reducer)
    return <Provider store={store}>
        <BaseComponent/>
    </Provider>
}


