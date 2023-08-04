import { useSelector, useDispatch } from "react-redux"; 
import Cards from '../../components/Cards/Cards';
import { useEffect, useState } from "react";
import { allGames } from "../../redux/actions";


export default function Home () {
    const { videogames } = useSelector((state) => state);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allGames());
    }, []);

    return (
        <div>
            {
                videogames?.map(game => {
                    return(
                        <div>
                            <Cards 
                            name={game.name}
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


/*
<div className={css.container}>
            {
                countries.map(ele => {
                    return (
                        <div>
                            <Cards 
                            flags={ele.flags}
                            name={ele.name}
                            contient={ele.continent}
                            /> 
                        </div>
                    )
                })
            }
        </div>
*/