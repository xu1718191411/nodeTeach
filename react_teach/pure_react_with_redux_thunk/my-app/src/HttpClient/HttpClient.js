import {CHOOSE_SENTENCE_TYPE, CHOOSE_TEXT_TYPE, CHOOSE_VOCABULARY_TYPE, CHOOSE_FOLLOW_TYPE, CHOOSE_MY_TYPE} from "../Actions/action_types";

const response = (content) =>{
    return new Promise((resolve,reject)=>{

        setTimeout(_=>{
            resolve(content)
        },3000)

    })
}


const requestContent = (menu) => {

    switch (menu) {
        case CHOOSE_TEXT_TYPE:
            return response("This is the text page let's do some text content")
        case CHOOSE_SENTENCE_TYPE:
            return response("This is the sentence page lets do some sentence content")
        case CHOOSE_VOCABULARY_TYPE:
            return response("This is the vocabulary page let's do some vocabulary")
        case CHOOSE_FOLLOW_TYPE:
            return response("This is the follow page let's do some follow")
        case CHOOSE_MY_TYPE:
            return response("This is the choose page")
        default:
            return response("This is what?")
    }

    
}

export const httpClient = {
    requestContent: requestContent
}
