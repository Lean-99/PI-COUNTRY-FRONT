import { Link } from "react-router-dom";
import css from './LandingPage.module.css';

export default function LandingPage () {
    return (
        <div className=''>
            
            <div className=''>
                <h1>PI COUNTRY</h1>
                <div>Proyecto realizado por Leandro Camargo</div>
                <Link className="button" to='/home'>
                    <button>Comencemos</button>
                </Link>  
            </div>

        </div>
    )
};