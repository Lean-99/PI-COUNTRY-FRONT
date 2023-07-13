import axios from 'axios'; 
import { ALL_COUNTRIES } from "./actions-types";

const URL = 'http://localhost:3001';

// Las actions van a retornar una funcion, solo cuando haya que hacer una peticion de manera asincrona. 
export function allCountries () {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}/countries`).then(result => {
                return dispatch({
                    type: ALL_COUNTRIES,
                    payload: result.data
                });
            });
        } catch (error) {
            console.log({error: error.message});
        }
    };
}; 