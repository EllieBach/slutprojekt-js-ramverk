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

   
    </div>
  );
};

export default SearchBar;
