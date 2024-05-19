import { NavLink, Outlet } from "react-router-dom";
import "../sass/NavBar.scss";
import hamster from "../assets/images/hamster.png";
import cozycave from "../assets/images/Cozy Cave.svg";
import heart from "../assets/images/heart.svg";

const Root = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
            <div className="logo-container">
          <img id="hamster" src={hamster} alt="a hamster reading book" />{" "}
          <img id="cozycave"src={cozycave} alt="cozy cave" />
          </div>
          <NavLink className="nav-link" to="/">
            {" "}
            Home
          </NavLink>
          <NavLink className="nav-link" to="/searchPage">
            Search
          </NavLink>
          <NavLink className="nav-link" to="myPage">
My page
          </NavLink>
          <NavLink className="nav-link" to="favoritesPage">
           <img src={heart} alt="heart" />
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
