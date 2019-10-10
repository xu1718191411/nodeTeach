import React from 'react'
import {MenuComponent} from "./MenuComponent";
import {ContentComponent} from "./ContentComponent";
import connect from 'redux'

export class BaseComponent extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return <div>
            <MenuComponent/>
            <ContentComponent/>
        </div>
    }
}