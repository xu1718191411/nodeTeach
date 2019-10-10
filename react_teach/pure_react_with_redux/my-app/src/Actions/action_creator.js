import {SELECT_FOLLOW, SELECT_MY, SELECT_SENTENCE, SELECT_TEXT, SELECT_VOCABULARY} from "./action_types";

export const selectMenu = (menu) =>{
    switch (menu) {
        case 'text':
            return SELECT_TEXT
        case 'follow':
            return SELECT_FOLLOW
        case 'vocabulary':
            return SELECT_VOCABULARY
        case 'sentence':
            return SELECT_SENTENCE
        case 'my':
            return SELECT_MY
    }
}