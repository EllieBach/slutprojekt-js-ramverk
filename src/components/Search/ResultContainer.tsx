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
  const [pageChecker, setPageChecker] = useState(0); //att kolla vilken sida utav resultatet man är på för att kunna bläddra bland resultat
  const [pageArray, setPageArray] = useState<any>([[]]); //array i en array. längst inne finns objekt som är böcker
 
  const searchResults = useSelector(getSearchResult) as unknown as Doc[]; // Hämtar böcker ifrån store
  
  useEffect(()=>{
    const paginatedResults = useChopArray(searchResults); //skapar nestad array
    setPageArray(paginatedResults) //sätter pageArray till vår nestade array
  },[searchResults])

  const handleNextPage = () => {  //hanterar sidor genom att öka/minska ett nummer
    if (pageChecker === pageArray.length - 1) {
      setPageChecker(0);
    } else {
      setPageChecker(pageChecker + 1);
    }
  };


  const handlePrevPage = () => { //hanterar sidor genom att öka/minska ett nummer
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
        {/*Mappar ut en en div med ett datacard i för varje bok i den nuvarande indexen som avgörs av pageChecker. 
        Datacard tar emot bokobjekt och en sträng som hanterar ifall boken skall ska favoriseras eller tas bort från favoriter
        knapparna antingen ökar eller minskar pageChecker */}
        <div className="paginator">
        <img className="leftArrow" src={leftArrow} alt="" onClick={handlePrevPage} />
        <img className="rightArrow" src={rightArrow} alt="" onClick={handleNextPage} />
      </div>
      </div>
    </>
  );
};

export default ResultContainer;
