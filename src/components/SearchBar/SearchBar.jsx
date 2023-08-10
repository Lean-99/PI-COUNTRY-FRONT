import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { gameByName  } from "../../redux/actions"; 


export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchName, setsearchName] = useState(''); 
    

    const handleInputChange = (event) => {
        event.preventDefault()
        setsearchName(event.target.value); 
    }; 
     
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(gameByName(searchName));  
    };
     
    return (
        <div>
            <input
            type='text'
            placeholder='Search Videogames...'
            onChange={handleInputChange}
            />

            <button type='submit' onClick={handleSubmit}>Search</button>
        </div>
    )
};

//import { gameByName, allGames } from "../../redux/actions"; 