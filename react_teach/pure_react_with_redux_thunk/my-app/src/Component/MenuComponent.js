import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectMenu} from "../Actions/actions";

export class Component extends React.Component{
    constructor(props) {
        super(props);
    }

    selectMenuItem(menu){
        this.props.selectMenu(menu)
    }

    render() {
        return <div className={"menu"}>
            <div onClick={_=> this.selectMenuItem("text")}>text</div>
            <div onClick={_=> this.selectMenuItem("sentence")}>sentence</div>
            <div onClick={_=> this.selectMenuItem("vocabulary")}>vocabulary</div>
            <div onClick={_=> this.selectMenuItem("follow")}>follow</div>
            <div onClick={_=> this.selectMenuItem("my")}>my</div>
        </div>
    }

}


const mapStateToProps = ()=>{
    return {}
}

const mapDispatchToProps = (dispatch) => {
    const event = {
        selectMenu:(menu)=>dispatch(selectMenu(menu))
    }
    bindActionCreators(event,dispatch);

    return event
}


export const MenuComponent = connect(mapStateToProps,mapDispatchToProps)(Component)