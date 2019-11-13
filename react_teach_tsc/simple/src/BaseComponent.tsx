import * as React from "react";

export interface BaseComponentState {

}

export interface BaseComponentProps {

}

export class BaseComponent extends React.Component<BaseComponentProps,BaseComponentState>{
    constructor(props:BaseComponentProps){
        super(props);
    }

    render(){
        return <div className="base-component">BaseComponent</div>;
    }
}