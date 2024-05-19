import { combineReducers } from 'redux';
import searchReducer from "../slice/SliceSearch";
import favortiesReducer from "../slice/favoriteSlice";
import readBookReducer from "../slice/readBookSlice";
interface SearchState{
    result: types;
}

export interface RootState {
    search: SearchState;
    favorites: FavoritesState;
    readBooks: ReadBookState;
}
interface FavoritesState{

}
interface ReadBookState {}
const rootReducer = combineReducers({
  
    search: searchReducer,
    favorites: favortiesReducer,
    readBooks: readBookReducer,
   
});


export default rootReducer;