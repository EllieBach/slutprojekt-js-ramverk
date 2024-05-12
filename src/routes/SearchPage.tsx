import React, { useState } from 'react';
import  SearchBar  from "../components/Search/SearchBar";
import ResultContainer from "../components/Search/ResultContainer";

const SearchPage = () => {
  
  return (
    <div>
      <SearchBar  />
      <ResultContainer  />
    </div>
  );
};

export default SearchPage;
