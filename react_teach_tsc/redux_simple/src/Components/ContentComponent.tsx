import * as React from "react"
import {ContentCompoentProps} from "../Props/Props";
import {State} from "../States/States";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "../Actions/Actions";


type Props = ContentCompoentProps & typeof Actions;

class Component extends React.Component<Props>{
    render() {
        return <div className="content-component-content">{this.props.content}</div>;
    }
}

const MapDispatchToProps = (dispatch:any):typeof Actions=>{
    return bindActionCreators(Actions,dispatch)
}

export function mapStateToProps(state:State):ContentCompoentProps{
    console.log(state.contentComponentState)
    return {
        content:state.contentComponentState.content
    }
}

export const ContentComponent = connect(mapStateToProps,MapDispatchToProps)(Component)


