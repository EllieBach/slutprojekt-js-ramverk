import React, { useEffect, useState } from 'react'
import {fetchTitle} from "../API/library";



const Home = () => {
    const [something, setSomething] = useState('');
    const handleChange =(e)=>{
        setSomething(e.target.value)
    }

useEffect (() =>{
    console.log(something)
}, [something])

const handleClick = () => {
fetchTitle(something)
}
  return (
    <>
    <div>Home</div>
    <input type="text" value={something} onChange={handleChange} />
    <button onClick={handleClick}>search</button>
    </>
  )
}

export default Home