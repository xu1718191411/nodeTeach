import React from 'react'
import { connect } from 'react-redux'
import {selectMenu} from "../Actions/action_creator";
class Component extends React.Component{
    constructor(props){
        super(props)
    }

    onMenuSelect(menu){
        console.log("menu")
        this.props.selectMenuItemByDispatch(menu);
    }

    render() {
        return <div className={"menu"}>
            <div onClick={_=>{this.onMenuSelect("text")}}>text</div>
            <div>follow</div>
            <div>vocabulary</div>
            <div>sentence</div>
            <div>my</div>
        </div>
    }
}


const MapDispatchToProps = (dispatch) => {

    return {
        selectMenuItemByDispatch:(menu)=>{
            dispatch(selectMenu(menu))
        }
    }
}

const MapStateToProps = (state) => {
    return {

    }
}

export const MenuComponent = connect(MapStateToProps,MapDispatchToProps)(Component)