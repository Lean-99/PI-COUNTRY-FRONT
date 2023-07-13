import { useSelector, useDispatch } from "react-redux"
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react"
import { allCountries } from "../../redux/actions";
import css from './Home.module.css';



export default function Home () {
    const { countries, allActivity } = useSelector((state) => state); 

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allCountries());
    }, []);


    return (
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
    )
};