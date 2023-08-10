import { useSelector, useDispatch } from "react-redux"; 
import Cards from '../../components/Cards/Cards';
import { useEffect } from "react";
import { allGames } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import css from './Home.module.css'



export default function Home () {
    const pathname = useLocation(); 
    const { videogames, game } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allGames());
    }, []);

    const gameToRender = game.length > 0 ? game : videogames;

    return (
        <div className={css.home}>
            <div> 
                {pathname !== '/' && <NavBar />} 
            </div>
            {
                gameToRender?.map(game => {
                    return(
                        <div>
                            <Cards 
                            id={game.id}
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