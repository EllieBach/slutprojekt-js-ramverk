import {NavLink, Outlet} from "react-router-dom";
import catlogo from "../assets/images/catbook.svg";

const Root = () => {
  return (
   <>
   <header>
<nav className="nav-bar"> 

    <NavLink  className="nav-link" to="/">Home</NavLink>
    <NavLink className="nav-link" to="favorites">Favorites</NavLink>
</nav>
    </header>
    <main>
        <Outlet />
    </main>
   </>
  )
}

export default Root