import React, { useState } from "react";
import "../../sass/SearchBar.scss";
import { useDispatch } from "react-redux";
import { useSearchBar } from "../../hooks/useSearchBar"; 
const SearchBar = () => {
  const [selectedType, setSelectedType] = useState("title"); 
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
    
      await useSearchBar(query, selectedType, dispatch);
    }
  };

  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="searchBox">
      <input
        id="searchInput"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {/* Radio buttons */}
      <div className="input-container">
      <input
        type="radio"
        value="author"
        checked={selectedType === "author"}
        onChange={handleRadioChange}
      />
      <label htmlFor="author">Author</label>

      <input
        type="radio"
        value="title"
        checked={selectedType === "title"}
        onChange={handleRadioChange}
      />
      <label htmlFor="title">Title</label>
    </div>
    </div>
  );
};

export default SearchBar;
