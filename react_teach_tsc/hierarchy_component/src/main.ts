import * as React from 'react'
import * as ReactDom from 'react-dom'
import {BaseComponent} from "./Components/BaseComponent";

export const main = () => {
    const element = document.createElement('root-react');
    document.body.appendChild(element);
    const component = React.createElement(BaseComponent);
    ReactDom.render(component,element)
}
