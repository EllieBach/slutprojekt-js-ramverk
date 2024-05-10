import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {types} from "../../types/types"

interface SearchState {
  result: SearchResult[];
}

const initialState: SearchState = {
  result: [],
};

interface TitleSearch {
  type: "title";
  title: types;
}

interface AuthorSearch {
  type: "author";
  author: types;
}

const sliceSearch = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult(state, action: PayloadAction<SearchResult>) {
      if (action.payload.type === "title") {
        state.result.push(action.payload);
      } else if (action.payload.type === "author") {
        state.result.push(action.payload);
      }
    },
  },
});

export const { setSearchResult } = sliceSearch.actions;

export type SearchResult = TitleSearch | AuthorSearch;

export default sliceSearch.reducer;
