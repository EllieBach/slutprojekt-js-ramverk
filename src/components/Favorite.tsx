import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch hook
import { getFavorites, addFavorites } from "../redux/slice/favoriteSlice"; // Importing selector and action creator
import { Doc } from '../types/types';

const Favorite: React.FC = () => {
  const favorites = useSelector(getFavorites) as Doc[];
  const dispatch = useDispatch(); 

  const handleAddToFavorites = (book: Doc) => {
   
    dispatch(addFavorites(book));
  };

  return (
    <div className="favorite-page">
      <div className="favorite-list">
        {Array.isArray(favorites) ? (
          favorites.map((book, index) => (
            <div key={index} className="favorite-item">
              <p>{book.title}</p>
              <p>{book.author_name}</p>
              <p>{book.first_publish_year}</p>
             
            </div>
          ))
        ) : (
          <p>No favorite books found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
