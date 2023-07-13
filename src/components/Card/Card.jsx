import { Link } from "react-router-dom";


export default function Card ({ name, flags, id, continents }) {
    return (
        <div className="PARA CSS DE LA CARTA">
            <div className="PARA CSS DEL CONTENIDA">
                <div>
                    <img src={flags} alt='flag'/>
                </div>
                <div>
                    <h4>{name}</h4>
                </div>
                <div>
                    <p>{continents}</p>
                </div>
                <div>
                    <Link to={`/countries/${id}`}>
                        <button className="PARA ESTILO DEL BOTON">Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}; 