import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useDispatch } from "react-redux";
import Button from "../RmButton";
import BookInfo from "../../routes/BookInfo";
import { types, Doc } from "../../types/types"; // Import types from your types file

export interface BookCardProps {
  item: Doc;
}

const BookCard: React.FC<BookCardProps> = ({ item }) => {
/*   const dispatch = useDispatch();
  const handleReadMore = () => {}; */

  return (
    <>
{/*       <div className="card">
        <img src="" alt="" />
        <section>
          <h2 className="title">{item.title}</h2>
          <p className="author">{item.author_name}</p>
          <p>{item.publish_year}</p>
        </section>
        
      </div> */}
    </>
  );
};

export default BookCard;
