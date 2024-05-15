import { combineReducers } from 'redux';
import searchReducer from "../slice/SliceSearch";
import favortiesReducer from "../slice/favoriteSlice"
interface SearchState{
    result: types;
}

export interface RootState {
    search: SearchState;
    favorites: FavoritesState
}
interface FavoritesState{

}
const rootReducer = combineReducers({
  
    search: searchReducer,
    favorites: favortiesReducer,
   
});

export default rootReducer;