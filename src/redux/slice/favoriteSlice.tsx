import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";
import { Doc } from "../../types/types";
import { isEqual } from "lodash";

interface FavoritesState {
    books: Doc[];
}

const initialState: FavoritesState = {
    books: [],
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites(state, action: PayloadAction<{ input: any; addOrRemove: string}>) {
           
            const { input, addOrRemove} = action.payload;
            console.log(input)
            if(addOrRemove==="add"){
                const isDuplicate = state.books.some(book => isEqual(book, input));
                if(!isDuplicate){
                state.books.push(input);
                }
            }
           else if(addOrRemove==="remove"){
            state.books = state.books.filter((book) => !isEqual(book, input));          

           }
            
            
            
        },
        removeFavorites(state, action: PayloadAction<{ book: any }>) {
            const { book: removeBook } = action.payload;
            state.books = state.books.filter((book) => book !== removeBook);
            
        }
    },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const getFavorites = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
