import React from 'react'
import { fetchByTitle } from '../API/library'
import { setSearchResult } from '../redux/slice/SliceSearch';

//custom hook
export const useSearchBar = async(search: string, dispatch:any) => {
const searchTerm = search.replace(/ /g, "+");
if (search){
    const response = await fetchByTitle(searchTerm); // hämta böcker
    dispatch(setSearchResult({ title: response.docs })) // -> sliceSearch

}

}
