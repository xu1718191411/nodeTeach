import {
    CHOOSE_TEXT_TYPE,
    CHOOSE_TEXT,
    CHOOSE_SENTENCE_TYPE,
    CHOOSE_SENTENCE,
    CHOOSE_FOLLOW,
    CHOOSE_FOLLOW_TYPE, CHOOSE_VOCABULARY_TYPE, CHOOSE_VOCABULARY, CHOOSE_MY_TYPE, CHOOSE_MY, FETCH_CONTENT
} from "./action_types";
import {httpClient} from "../HttpClient/HttpClient";

export const selectMenu = (menu) => {

    switch (menu) {
        case CHOOSE_TEXT_TYPE:
            return {
                menu:CHOOSE_TEXT,
                type:CHOOSE_TEXT_TYPE
            }
        case CHOOSE_SENTENCE_TYPE:
            return {
                menu:CHOOSE_SENTENCE,
                type:CHOOSE_SENTENCE_TYPE,
            }

        case CHOOSE_FOLLOW_TYPE:
            return {
                menu:CHOOSE_FOLLOW,
                type:CHOOSE_FOLLOW_TYPE
            }
        case CHOOSE_VOCABULARY_TYPE:
            return {
                menu:CHOOSE_VOCABULARY,
                type:CHOOSE_VOCABULARY_TYPE
            }
        case CHOOSE_MY_TYPE:
            return {
                menu:CHOOSE_MY,
                type:CHOOSE_MY_TYPE
            }
        default :
            return {
                menu:CHOOSE_TEXT,
                type:CHOOSE_TEXT_TYPE
            }
    }
}

export const fetchContent = (content) => {
    return {
        type:FETCH_CONTENT,
        content:content
    }
}

export const thunkFetchContent = (menu) => (dispatch,getState) => {
        httpClient.requestContent(menu).then(res=>{
            dispatch(fetchContent(res))
        })
}