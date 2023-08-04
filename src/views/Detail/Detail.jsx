import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gameById } from "../../redux/actions";
import Card from "../../components/Card/Card";


function Detail () {
    const { detail } = useSelector((state) => state);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(gameById(id)); 
    }, []);  

    return (
        <div>
            {
                detail?.map(game => {
                    return (
                        <div>
                            <Card 
                            name={game.name}
                            id={game.id}
                            
                            description={game.description}
                            released={game.released}
                            image={game.image}
                            /> 
                        </div>
                    )
                })
            }
        </div>
    )
};



export default Detail; 