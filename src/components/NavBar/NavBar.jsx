import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


function NavBar () {
    return (
       <nav>
            <div>
                <SearchBar />
            </div>
            <div>
                <Link to='/home'>Home</Link>
            </div>
        </nav> 
    )
};



export default NavBar;