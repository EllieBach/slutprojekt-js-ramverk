import React from "react";
import coffee from "../assets/images/noun-coffee-cup-220468.svg";
import "../sass/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="ntContainer">
        
        <p>Oops! the page doesnt exist </p>
        <p>
          Take a break with a cup of coffee or <span>try again</span>
        </p>
        <img id="coffeeimg" src={coffee} alt="coffee" />
      </div>
    </>
  );
};

export default NotFound;
