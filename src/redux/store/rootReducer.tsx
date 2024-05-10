import { combineReducers } from "@reduxjs/toolkit";

import {types} from "../../types/types"
interface SearchState {
    result: types; 
}


function searchReducer( action: any) {
   
 
}


const rootReducer = combineReducers({
    search: searchReducer,
})

export default rootReducer;