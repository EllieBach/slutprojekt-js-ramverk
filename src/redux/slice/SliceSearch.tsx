//hämta o skicka

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {types} from "../../types/types";
import {RootState} from "../store/rootReducer"

//definerar
interface SearchState {
  result: SearchResult[]; // array av object
}

const initialState: SearchState = {
  result: [], // tom array
};

interface TitleSearch {
  title: types; // boken
}


const sliceSearch = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult(state, action: PayloadAction<SearchResult>) { //här kommer datan in
        state.result = action.payload; //Vi sätter vårt state till vår input data, lådan som grejerna är i 
    },
  },
});

export const { setSearchResult } = sliceSearch.actions;
export type SearchResult = TitleSearch;
export const getSearchResult = (state: RootState) => state.search.result; // def + exp 
export default sliceSearch.reducer;