//API
import React from 'react'
import axios from 'axios'
const titleUrl = "https://openlibrary.org/search.json?title="
const authorUrl ="https://openlibrary.org/search/authors.json?q="

export async function fetchByTitle(searchTerm:string) {
  try{
const response = await axios.get(`${titleUrl}${searchTerm}`);
console.log(response)
return response.data;
  } catch(error){
    console.error('error')
    return null;
  }
}


