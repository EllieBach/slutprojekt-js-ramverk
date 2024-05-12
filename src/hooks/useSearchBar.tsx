import React from 'react'
import { fetchAuthor, fetchTitle } from '../API/library'
import { setSearchResult } from '../redux/slice/SliceSearch';

//custom hook
export const useSearchBar = async(search: string, searchType: string, dispatch:any) => {
const searchTerm = search.replace(/ /g, "+");
console.log("SDfsdf")
let response;
if (searchType ==="title"){
    response = await fetchTitle(searchTerm);
    dispatch(setSearchResult({type: searchType,title:response.docs }))

} else if (searchType ==="author"){
response === await fetchAuthor(searchTerm);
}
return response;
}
