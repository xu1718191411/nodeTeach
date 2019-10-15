import React from 'react'
import { connect } from 'react-redux'
import {selectMenu} from "../Actions/action_creator";
import {bindActionCreators} from "redux";
class Component extends React.Component{
    constructor(props){
        super(props)
    }

    onMenuSelect(menu){
        console.log("menu")
        this.props.selectMenu(menu);
    }

    render() {
        return <div className={"menu"}>
            <div onClick={_=>{this.onMenuSelect("text")}}>text</div>
            <div onClick={_=>{this.onMenuSelect("follow")}}>follow</div>
            <div onClick={_=>{this.onMenuSelect("vocabulary")}}>vocabulary</div>
            <div onClick={_=>{this.onMenuSelect("sentence")}}>sentence</div>
            <div onClick={_=>{this.onMenuSelect("my")}}>my</div>
        </div>
    }
}


const MapDispatchToProps = (dispatch) => {

    const event = {
        selectMenu:(menu)=>{
            return selectMenu(menu)
        }
    }

    return bindActionCreators(event,dispatch)

}

const MapStateToProps = (state) => {
    return {

    }
}

export const MenuComponent = connect(MapStateToProps,MapDispatchToProps)(Component)