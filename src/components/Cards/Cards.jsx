import { Link } from "react-router-dom";


export default function Cards ({name, image, released}) {
    return (
        <div>
            <div>
            <Link to='/detail'>
                <h2>{name}</h2>
            </Link>
                <h3>{released}</h3>   
            </div>
            <div>
                <img src={image} alt="image" />
            </div>
        </div>
    )
}; 