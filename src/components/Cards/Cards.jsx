import { Link } from "react-router-dom";
import css from './Cards.module.css'; 

export default function Cards ({id, name, image, released}) {
    return (
        <div className={css.card}>
            <div>
            <Link to={`/detail/${id}`}>
                <h2 className={css.name}>{name}</h2>
            </Link>
                <h3 className={css.released}>{released}</h3>   
            </div>
            <div>
                <img className={css.image} src={image} alt="image" />
            </div>
        </div>
    )
}; 