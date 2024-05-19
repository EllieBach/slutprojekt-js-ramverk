import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";
import { Doc } from "../../types/types";
import { isEqual } from "lodash";

interface BookWithPages extends Doc {
    pagesRead?: number;
}

interface FavoritesState {
    books: BookWithPages[];
}

const initialState: FavoritesState = {
    books: [],
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites(state, action: PayloadAction<{ input: BookWithPages; addOrRemove: string }>) {
            const { input, addOrRemove } = action.payload;
            if (addOrRemove === "add") {
                const isDuplicate = state.books.some(book => isEqual(book, input));
                if (!isDuplicate) {
                    state.books.push(input);
                }
            } else if (addOrRemove === "remove") {
                state.books = state.books.filter(book => !isEqual(book, input));
            }
        },
        removeFavorites(state, action: PayloadAction<{ book: BookWithPages }>) {
            const { book: removeBook } = action.payload;
            state.books = state.books.filter(book => book.key !== removeBook.key);
        },
        updatePagesRead(state, action: PayloadAction<{ bookId: string, pagesRead: number }>) {
            const { bookId, pagesRead } = action.payload;
            const book = state.books.find(book => book.key === bookId);
            if (book) {
                book.pagesRead = pagesRead;
            }
        }
    },
});

export const { addFavorites, removeFavorites, updatePagesRead } = favoriteSlice.actions;
export const getFavorites = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
