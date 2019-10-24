import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export class Component extends React.Component{

    content = "content"

    constructor(props){
        super(props)
    }

    render() {
        return <div>{this.props.content}</div>
    }
}


const mapStateToProps = (state) => {

    return {
        content:state.globalState.content
    }
}

const mapDispatchToProps = (dispatch) => {
    const event = {}
    bindActionCreators(event,dispatch)
    return event
}


export const ContentComponent = connect(mapStateToProps,mapDispatchToProps)(Component);


