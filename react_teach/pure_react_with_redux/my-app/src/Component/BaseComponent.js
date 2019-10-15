import React from 'react'
import {MenuComponent} from "./MenuComponent";
import {ContentComponent} from "./ContentComponent";
import { connect } from 'react-redux'
import {selectMenu} from "../Actions/action_creator";
import {bindActionCreators} from "redux";

class Component extends React.Component{

    componentDidMount() {
        console.log("open")
        this.props.onOpen("text")
    }

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


const MapDispatchToProps = (dispatch) => {

    const event =  {
        onOpen:(menu)=>{
            return selectMenu(menu)
        }
    }//记住这个结构，一个json，每一个元素对应一个函数，每一个函数返回一个action

    return bindActionCreators(event,dispatch)
}

const MapStateToProps = (state) => {

    console.log(state)
    return {

    }

}


export const BaseComponent = connect(MapStateToProps,MapDispatchToProps)(Component)