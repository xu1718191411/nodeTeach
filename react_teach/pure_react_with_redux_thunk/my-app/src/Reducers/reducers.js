import {
    CHOOSE_FOLLOW_TYPE, CHOOSE_MY_TYPE,
    CHOOSE_SENTENCE_TYPE,
    CHOOSE_TEXT_TYPE,
    CHOOSE_VOCABULARY_TYPE
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
        case CHOOSE_TEXT_TYPE:
            return {...state,content:"this is text page"}
        case CHOOSE_SENTENCE_TYPE:
            return {...state,content:"this is sentence page"}
        case CHOOSE_VOCABULARY_TYPE:
            return {...state,content:"this is vocabulary page"}
        case CHOOSE_FOLLOW_TYPE:
            return {...state,content:"this is the follow page"}
        case CHOOSE_MY_TYPE:
            return {...state,content:"this is the type page"}
    }
}

export const reducer = combineReducers({
    globalState:globalReducer
})