import React from "react";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../redux/slice/favoriteSlice";
import { NavLink } from "react-router-dom";
import heart from "../../assets/images/FavoriteHollow.svg";
import "../../sass/DataCard.scss";
import "../../sass/Buttons.scss"
import RmButton from "../RmButton";

const DataCard = ({ book, addOrRemove }) => {
  const dispatch = useDispatch();
  const isFavorite = book.isFavorite || false;

  const handleFavoriteButton = () => {
    if (isFavorite) {
    } else {
      dispatch(addFavorites({ input: book, addOrRemove:addOrRemove}));
    }
  };

  const handleReadMore = () => {};

  return (
    <div className="info-card">
      <img
        className="bookImg"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={`${book.title}`}
      />
      <div className="bookInfo">
        <p>{book.title}</p>
        <p>{book.author_name}</p>
        <p>{book.first_publish_year}</p>
      </div>
      <div className="button-container">
        <button id="fav-button" onClick={handleFavoriteButton}>
         
           {isFavorite ? <img src={heart}></img>: <img src={heart}></img>} 
          
        </button>
    
        <NavLink className="nav-link"  to="/bookInfo" state={{ value:book}} >
         <RmButton/>
        </NavLink>
      
      </div>
    </div>
  );
};

export default DataCard;
