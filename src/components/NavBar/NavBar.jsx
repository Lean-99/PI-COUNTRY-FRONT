import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import css from './NavBar.module.css';


function NavBar () {
    return (
       <nav className={css.navbar}>
        <div className={css.search}>
            <SearchBar /> 
        </div>
        <div>
            <Link to='/home'>Home</Link>
        </div>
        <div>
            <Link to='/form'>New Activity</Link>
        </div>
       </nav>
    )
};



export default NavBar;
            