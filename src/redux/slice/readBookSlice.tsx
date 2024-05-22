import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";
import { Doc } from "../../types/types";
import { isEqual } from "lodash";

interface ReadBooksState {
    title: string;
    review: string;
    rating: number;
    amountPages: number;
}

const initialState: ReadBooksState[] = [{
    title: "",
    review:"",
    rating:0,
    amountPages: 0,}
];



const readBookSlice = createSlice({
    name: "readBooks",
    initialState,
    reducers: {
        addReadBook(state, action: PayloadAction<({title: string, review:string, rating:number, amountPages: number})>) {
            
            const book = action.payload;
           
            const isDuplicate = state.some(b => isEqual(b, book));
            if (!isDuplicate) {
             
                state.push(book);
            }
        },
        
    },
});

export const { addReadBook } = readBookSlice.actions;

export const selectReadBooks = (state: RootState) => state.readBooks;

export default readBookSlice.reducer;
