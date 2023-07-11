import { Link } from "react-router-dom";


export default function LandingPage () {
    return (
        <div>
            <h1>Estoy en la LandingPage</h1>
            <Link className="button" to='/home'>
                <button>Comencemos</button>
            </Link>
        </div>
    )
};