import axios from 'axios'; 
import { ALL_GAMES, GAMES_BY_ID } from "./actions-types";

const URL = 'http://localhost:3001';

// Las actions van a retornar una funcion, solo cuando haya que hacer una peticion de manera asincrona. 
export function allGames () {
    return async (dispatch) => {
        try {
            const response =  (await axios.get(`${URL}/videogames`)).data;
            const allGames = response; 

            return dispatch({
                type: ALL_GAMES,
                payload: allGames
            });
        }
         catch (error) {
            console.log({error: error.message});   
        }
    }  
}; 

export function gameById (id) {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`${URL}/videogames/${id}`)).data;
            const game = response 
            
            const gameArray = [game]; 
            console.log('DATA', gameArray);
            return dispatch({
                type: GAMES_BY_ID,
                payload: gameArray 
            }); 
        } catch (error) {
            console.log({error: error.massage});
        }
    }       
};










/*export function countryById (id) {
    return async (dispatch) => {
        await axios.get(`${URL}/countries/${id}`).then((result) => {
            return dispatch({
                type: COUNTRY_BY_ID,
                payload: result.data
            });
        });
    };
};*/