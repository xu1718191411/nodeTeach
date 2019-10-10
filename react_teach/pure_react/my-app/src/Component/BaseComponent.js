import React from 'react'
import {MenuComponent} from "./MenuComponenet";
import {ContentComponent} from "./ContentComponent";
export class BaseComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content:""
        }

        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);
    }

    onMenuItemSelect(menu){
        this.setState({
            content:this.requestContent(menu)
            }
        )
    }

    requestContent(menu){

        switch (menu) {
            case 'text':
                return 'this is the text page'
            case 'sentence':
                return 'this is the sentence page'
            case 'vocabulary':
                return 'this is the vocabulary page'
            case 'follow':
                return 'this is the follow page'
            case 'my':
                return 'this is the my page'
            default:
                return ''
        }

    }

    render(){
        console.log("rendering....")
        return <div>
            <MenuComponent onMenuItemSelectFromBase={this.onMenuItemSelect}></MenuComponent>
            <ContentComponent content={this.state.content}/>
        </div>
    }

}

