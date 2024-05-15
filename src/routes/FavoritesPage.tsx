import React, { useEffect, useState } from 'react'
import "../sass/Favorites.scss"
import BookCard from "../components/Search/DataCard"
import Favorite from "../components/Favorite"
import { getFavorites} from "../redux/slice/favoriteSlice";
import { useSelector } from 'react-redux';
import DataCard from '../components/Search/DataCard';


const FavoritesPage = () => {
  const  [favBook, setFavBook] = useState<any>([]);


  const faveoriteResult = useSelector(getFavorites);
  useEffect(()=>{
    console.log(faveoriteResult)
  setFavBook(faveoriteResult.books)
  }, [faveoriteResult])
  return (
    <>
    <h1 id="fav-title">Favorites</h1>
    <div className="favContainer">
      {favBook && favBook.map((item, index)=>(<div key={index}><DataCard book={item} addOrRemove={"remove"} /></div>))}

    </div>
    </>
  )
}

export default FavoritesPage