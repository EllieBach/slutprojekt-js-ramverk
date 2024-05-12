import React, {useState} from 'react'
import heart from "../assets/images/heart.svg"
import "../sass/Buttons.scss"


const FavButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);



  const handleToggleFavorite = ()=>{
    setIsFavorite(!isFavorite)
  }
  return (
    <div id="fav-button" onClick={handleToggleFavorite}>
   <img id="heart" className={isFavorite ? 'filled' : ''} src={heart} alt="" /></div>
  )
}

export default FavButton