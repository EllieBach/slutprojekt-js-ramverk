import React, {useState} from 'react'
import heartHollow from "../assets/images/FavoriteHollow.svg"
import "../sass/Buttons.scss"


const FavButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);



  const handleToggleFavorite = ()=>{
    setIsFavorite(!isFavorite)
  }
  return (
    <div id="fav-button" onClick={handleToggleFavorite}>
   <img id="heart" src={heartHollow} alt="" /></div>
  )
}

export default FavButton