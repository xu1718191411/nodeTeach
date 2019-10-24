import {
    FETCH_CONTENT
} from "../Actions/action_types";
import {combineReducers} from "redux";

const initGlobalState = {
    menu:"text",
    content:"this is the text content"
}

const initStates = {
    globalState:initGlobalState
}

const globalReducer = (state,actions) => {

    if(state == undefined) return initStates

    switch (actions.type) {
        case FETCH_CONTENT:
            return {...state,content:actions.content}
        default:
            return {...state,content:"content"}
    }


}

export const reducer = combineReducers({
    globalState:globalReducer
})