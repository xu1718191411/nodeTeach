import actionCreatorFactory from "typescript-fsa";
import {CHOOSE} from './ActionTypes';
const actionCreator = actionCreatorFactory()

export const choose = actionCreator<string>(CHOOSE)