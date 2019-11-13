import * as Actions from '../Actions/Actions';
import {reducerWithInitialState} from "typescript-fsa-reducers";
import {combineReducers} from "redux";
import { State,ContentComponentState,MenuComponentState } from "../States/States";


const initialContentComponentState:ContentComponentState = {
    content:""
}

export const contentComponentReducer = reducerWithInitialState<ContentComponentState>(initialContentComponentState).case(Actions.choose,(state,payload)=>({...state,content: payload}))


const initialMenuComponentState:MenuComponentState = {
    type:""
}

export const menuComponentReducer = reducerWithInitialState<MenuComponentState>(initialMenuComponentState).case(Actions.choose,(state,payload)=>({
    ...state,type: payload
}))

export const reducer = combineReducers<State>({
    contentComponentState:contentComponentReducer,
    menuComponentState:menuComponentReducer
})