import * as React from 'react';
import {HeaderComponent} from "./HeaderComponent";
import {ContentComponent} from './ContentComponent';


export class BaseComponent extends React.Component{

    constructor(props:any){
        super(props);
    }

    render(){
        return <div>
            <HeaderComponent/>
            <ContentComponent/>
            </div>;
    }
}