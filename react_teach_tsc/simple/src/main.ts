import * as ReactDom from "react-dom";
import * as React from "react";
import {BaseComponent} from "./BaseComponent";

export const main = () =>{
    const element = document.createElement("react-root");
    document.body.appendChild(element);

    const component = React.createElement(BaseComponent);
    ReactDom.render(component,element)
}