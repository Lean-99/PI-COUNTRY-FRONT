import { Link } from "react-router-dom";
import css from './LandingPage.module.css';

export default function LandingPage () {
    return (
        <div className={css.image}>
            <div className=''>
                <h1>PI VIDEOGAMES</h1>
                <div>Proyecto realizado por Leandro Camargo</div>
                <Link className="button" to='/home'>
                    <button>START</button>
                </Link>  
            </div>
        </div>
    )
};