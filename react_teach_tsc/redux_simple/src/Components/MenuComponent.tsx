import * as React from "react";
import {State} from "../States/States";
import {MenuComponentProps} from "../Props/Props";
import {bindActionCreators} from "redux";
import * as Actions from "../Actions/Actions";
import {connect} from "react-redux";

type Props = MenuComponentProps & typeof Actions

class Component extends React.Component<Props>{


    onClickMenuTab(type:string){
        this.props.choose(type)
    }

    render(){
        console.log("rendering")
        return <div className={"menu"}>
            <div onClick={(e)=>this.onClickMenuTab("text")}>Text</div>
            <div onClick={(e)=>this.onClickMenuTab("vocabulary")}>Vocabulary</div>
            <div onClick={(e)=>this.onClickMenuTab("sentence")}>Sentences</div>
            <div onClick={(e)=>this.onClickMenuTab("my")}>Self</div>
        </div>;
    }
}


const MapDispatchToProps = (dispatch:any):typeof Actions=>{
    return bindActionCreators(Actions,dispatch)
}

export function mapStateToProps(state:State):MenuComponentProps{
    return {
        type:state.menuComponentState.type
    }
}

export const MenuComponent = connect(mapStateToProps,MapDispatchToProps)(Component);

