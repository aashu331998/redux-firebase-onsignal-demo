import {combineReducers} from "redux"
import LibrarieReducer from "./LibrarieReducer"

export default combineReducers({
    libraries: LibrarieReducer
});