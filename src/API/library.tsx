import React from 'react'
import axios from 'axios'
const titleUrl = "https://openlibrary.org/search.json?title="

export async function fetchTitle(searchTerm:string) {
  try{
const response = await axios.get(`${titleUrl}${searchTerm}`);
console.log(response)
return response.data;
  } catch(error){
    console.error('error')
    return null;
  }
}
