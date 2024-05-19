import React from "react";
import { NavLink } from "react-router-dom";
import coffee from "../assets/images/noun-coffee-cup-220468.svg";
import "../sass/NotFound.scss";

const NotFound = () => {
  return (
    <>
    <div className="nt">
      <div className="ntContainer">
        
        <p>Oops! the page doesnt exist </p>
        <p>
          Take a break with a cup of coffee or <NavLink className="nav-link" to="/">
            {" "}<span>try again</span></NavLink>
        </p>
        <img id="coffeeimg" src={coffee} alt="coffee" />
      </div>
      </div>
    </>
  );
};

export default NotFound;
