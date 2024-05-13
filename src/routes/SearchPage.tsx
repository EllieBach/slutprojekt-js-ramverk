import React, { useState } from 'react';
import  SearchBar  from "../components/Search/SearchBar";
import ResultContainer from "../components/Search/ResultContainer";
import DataCard from '../components/Search/DataCard';

const SearchPage = () => {
  
  return (
    <div>
      <SearchBar  />
      <DataCard/>
    </div>
  );
};

export default SearchPage;
