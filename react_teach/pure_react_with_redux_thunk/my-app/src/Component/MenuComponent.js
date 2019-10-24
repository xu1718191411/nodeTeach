import * as React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchContent, selectMenu, thunkFetchContent} from "../Actions/actions";
import {httpClient} from "../HttpClient/HttpClient";

export class Component extends React.Component{
    constructor(props) {
        super(props);
    }

    selectMenuItem(menu){
        this.props.selectMenu(menu)
    }

    selectMenuItemWithThunk(menu){
        this.props.selectMenuWithThunk(menu)
    }


    render() {
        return <div className={"menu"}>
            <div onClick={_=> this.selectMenuItemWithThunk("text")}>text<br/>(thunk)</div>
            <div onClick={_=> this.selectMenuItemWithThunk("sentence")}>sentence<br/>(thunk)</div>
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

        selectMenu:(menu)=>{
            httpClient.requestContent(menu).then(res=>{
                dispatch(fetchContent(res))
            })
        },

        selectMenuWithThunk:(menu)=>{
            dispatch(thunkFetchContent(menu))
        }
    }

    bindActionCreators(event,dispatch);

    return event
}


export const MenuComponent = connect(mapStateToProps,mapDispatchToProps)(Component)