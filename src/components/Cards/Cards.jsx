import { Link } from "react-router-dom";


export default function Cards ({id, name, flags, contient, population, capital, subregion, area}) {
    return (
        <div>
            <div>
                <img src={flags} alt="flag"/>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <h3>{contient}</h3>
            </div>
            <div>
                <Link to={`/countries/${id}`}><button>Detail</button></Link>
            </div>
        </div>
    )
}; 