import React, { useState } from "react";
import "../../sass/SearchBar.scss";
import { useDispatch } from "react-redux";
import { useSearchBar } from "../../hooks/useSearchBar"; 

const SearchBar = () => {
  const [query, setQuery] = useState(""); // lokala state
  const dispatch = useDispatch(); //data -> store

  const handleInputChange = (e) => {
    setQuery(e.target.value);//sätter värdet på query till det som står i input
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await useSearchBar(query, dispatch);
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
