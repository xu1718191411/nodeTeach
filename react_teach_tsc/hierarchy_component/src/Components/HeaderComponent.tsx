import * as React from "react"
import {MenuComponent} from './MenuComponent';

interface Props{
    onClickMenuFromHeader:Function;
}


export class HeaderComponent extends React.Component<Props>{

    constructor(props:Props) {
        super(props);
        this.handleClickMenu = this.handleClickMenu.bind(this)
    }

    private handleClickMenu(type:string){
        this.props.onClickMenuFromHeader(type);
    }

    render(){
        return <div className={"menu"}>
            <MenuComponent onClickMenuFromMenuComponent={this.handleClickMenu}/>
        </div>;
    }

}