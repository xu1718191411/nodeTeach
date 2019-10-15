import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Component extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>{this.props.content}</div>
    }
}


const MapDispatchToProps = (dispatch) => {

    const event =  {

    }

    return bindActionCreators(event,dispatch)
}

const MapStateToProps = (state) => {

    return {
        content:state.globalState.content
    }
}


export const ContentComponent = connect(MapStateToProps,MapDispatchToProps)(Component)

