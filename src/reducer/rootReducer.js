import {combineReducers} from "redux";
import {songsReducer} from "./songsReducer";
import {usersReducer} from "./usersReducer";

export const reducer = combineReducers({
    songs: songsReducer,
    users: usersReducer
});