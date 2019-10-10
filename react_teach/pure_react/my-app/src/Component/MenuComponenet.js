import React from 'react'

export class MenuComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            menu:"text"
        }
    }

    selectMenuItem(menuItem){
        this.setState({
            menu:menuItem
        })

        this.props.onMenuItemSelectFromBase(menuItem)
    }

    render(){
        return <div>
            <div className={"menu"}>
                <div onClick={()=>{this.selectMenuItem("text")}}>text</div>
                <div onClick={()=>{this.selectMenuItem("follow")}}>follow</div>
                <div onClick={()=>{this.selectMenuItem("vocabulary")}}>vocabulary</div>
                <div onClick={()=>{this.selectMenuItem("sentence")}}>sentence</div>
                <div onClick={()=>{this.selectMenuItem("my")}}>my</div>
            </div>

            <div>
                {this.state.menu}
            </div>
        </div>

    }
}