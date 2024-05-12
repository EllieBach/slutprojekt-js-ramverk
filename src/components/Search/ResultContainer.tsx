import React, { useEffect, useState } from 'react';
import "../../sass/Result.scss"
import { SearchResult } from "../../redux/slice/SliceSearch";
import BookCard from "./DataCard"; 
import { useSelector } from 'react-redux';
import { getSearchResult } from "../../redux/slice/SliceSearch";
import RmButton from '../RmButton';
import FavButton from '../FavButton';

export interface SearchResultTypes {
  author?: [];
  title?: [];
}

const ResultContainer = () => { 
  const [searchResults, setSearchResults] = useState<any>(); 
  const searchData = useSelector(
    getSearchResult
  ) as unknown as SearchResult[]; 
  useEffect(() => { console.log(searchData)
    setSearchResults(searchData.title) }, [searchData]) 
    //useEffekt körs när variabeln i dependency arrayn uppdateras. 
    //Dependency arrayn är den [] som är precis innan slutet av useEffect

    useEffect(()=>{
      console.log(searchResults)
    },
    [searchResults]
  )
  return (
    <div className="resultContainer">
      {searchResults && searchResults.map((book, index)=> (
        <div key={index}> 
        <div className="info-card">
          <img
            className="bookimg"
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
          />
       <div className="bookInfo">
        <p >{book.title}</p>
        <p >{book.author_name}</p>
        <p >{book.first_publish_year}</p>
        </div>
        <FavButton/>
        <RmButton/>
        </div>
        </div>
      )
      )}
    </div>
  );
};

export default ResultContainer;
