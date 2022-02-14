import { combineReducers } from "redux";
import {searchReducer} from './searchReducer';

const rootReducer = combineReducers({
    moviesReducer: searchReducer,
});
export default rootReducer;