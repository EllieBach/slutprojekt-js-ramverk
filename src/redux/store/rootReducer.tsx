import { combineReducers } from 'redux';
import searchReducer from "../slice/SliceSearch";

interface SearchState{
    result: types;
}

export interface RootState {
    search: SearchState;
}

const rootReducer = combineReducers({
  
    search: searchReducer,
   
});

export default rootReducer;