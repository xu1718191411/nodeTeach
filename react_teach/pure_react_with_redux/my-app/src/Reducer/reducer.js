import {
    SELECT_FOLLOW_TYPE, SELECT_MY_TYPE,
    SELECT_SENTENCE_TYPE,
    SELECT_TEXT_TYPE,
    SELECT_VOCABULARY_TYPE
} from "../Actions/action_types";




const golbalState = {
    menu:"text",
    content:"this is text page"
}

const initState = {
    globalState:golbalState
}


function globalReducer(state, action) {

    if (typeof state == undefined){
        return initState
    }

    switch (action.menu) {
        case SELECT_TEXT_TYPE:
            return Object.assign({},state,{...state,menu:"text",content: "this is text page"})
        case SELECT_SENTENCE_TYPE:
            return Object.assign({},state,{...state,menu:"sentence",content:"this is sentence page"})
        case SELECT_FOLLOW_TYPE:
            return Object.assign({},state,{...state,menu:"follow",content:"this is follow page"})
        case SELECT_VOCABULARY_TYPE:
            return Object.assign({},state,{...state,menu:"vocabulary",content:"this is vocabulary page"})
        case SELECT_MY_TYPE:
            return Object.assign({},state,{...state,menu:"my page",content:"this is my page"})
        default:
            return Object.assign({},state,{...state,menu:"my page",content:"this is my page"})
    }

}

export const reducer = (state={},action) => {
    return {
        globalState:globalReducer
    }
}
