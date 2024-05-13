import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useDispatch } from "react-redux";
import Button from "../RmButton";
import BookInfo from "../../routes/BookInfo";
import { types, Doc } from "../../types/types"; // Import types from your types file
import ResultContainer from "./ResultContainer";

export interface BookCardProps {
  item: Doc;
}

const DataCard: React.FC<BookCardProps> = ({ item }) => {


  return (
    <>
     <div className="card">
     <ResultContainer/>
    
      </div> 
    </>
  );
};

export default DataCard;
