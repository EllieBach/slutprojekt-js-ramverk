import React, { useState } from "react";
import "../sass/SearchBar.scss";
import { useSearchBar } from "../hooks/useSearchBar";
import { useDispatch } from "react-redux";



export const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await useSearchBar(searchTerm, searchType, dispatch)
      console.log("I NEED AN ADULT");
    }
  };
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="searchBox">
     
          <input
            id="searchInput"
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
             />

          {/*radio buttons */}
        <input type="radio" value="author" checked={selectedOption === "author"} onChange={handleRadioChange}/>  
        <label htmlFor="author">author</label>
        <input type="radio" value="title" checked={selectedOption === "title"} onChange={handleRadioChange}/> 
        <label htmlFor="title">title</label>
      </div>
    </>
  );
};
