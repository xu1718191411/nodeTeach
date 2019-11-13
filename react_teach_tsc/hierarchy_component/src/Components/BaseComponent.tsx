import * as React from "react";
import {HeaderComponent} from "./HeaderComponent";
import {ContentComponent} from "./ContentComponent";

interface Props{

}

interface State{
    content:string;
}

export class BaseComponent extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.state = {content:"beginning"}
    }

    handleClickMenu(type:string){
        this.setState(prevState =>{
            return {content:type}
        })
    }

    render(){
        return <div>
            <HeaderComponent onClickMenuFromHeader={this.handleClickMenu}/>
            <ContentComponent content={this.state.content}/>
        </div>;
    }
}