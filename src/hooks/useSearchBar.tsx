import React from 'react'
import { fetchAuthor, fetchTitle } from '../API/library'

//custom hook
export const useSearchBar = async(search: string, searchType: string) => {
const searchTerm = search.replace(/ /g, "+");

let response;
if (searchTerm ==="title"){
    response = await fetchTitle(searchTerm);

} else if (searchType ==="author"){
response === await fetchAuthor(searchTerm);
}
return response;
}
