import React, { useEffect, useState } from 'react';
import "../../sass/Result.scss";
import { useSelector } from 'react-redux';
import DataCard from './DataCard';
import leftArrow from "../../assets/images/arrow-left.svg";
import rightArrow from "../../assets/images/arrow-right.svg";
import { Doc } from "../../types/types";
import { getSearchResult } from "../../redux/slice/SliceSearch";
import { useChopArray } from '../../hooks/useChopArray';

const ResultContainer = () => {
  const [pageChecker, setPageChecker] = useState(0);
  const [pageArray, setPageArray] = useState<any>([[]]);
 
  const searchResults = useSelector(getSearchResult) as unknown as Doc[];
  
  useEffect(()=>{
  
    const paginatedResults = useChopArray(searchResults);
    setPageArray(paginatedResults)
   
   
  },[searchResults])

  const handleNextPage = () => {
    if (pageChecker === pageArray.length - 1) {
      setPageChecker(0);
    } else {
      setPageChecker(pageChecker + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageChecker === 0) {
      return;
    } else {
      setPageChecker(pageChecker - 1);
    }
  };

  return (
    <>
     
     <div className="resultContainer">
        {pageArray && pageArray[pageChecker].map((item, index)=>( <div key={index}><DataCard book={item} addOrRemove={"add"}/></div>))}
        <div className="paginator">
        <img className="leftArrow" src={leftArrow} alt="" onClick={handlePrevPage} />
        <img className="rightArrow" src={rightArrow} alt="" onClick={handleNextPage} />
      </div>
      </div>
    </>
  );
};

export default ResultContainer;
