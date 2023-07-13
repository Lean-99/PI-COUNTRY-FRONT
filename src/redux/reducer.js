import {
    ALL_COUNTRIES
} from './actions-types'; 



const initialState = {
    countries: [],
    detail: [],
    allAtivity: []
}; 



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allAtivity: action.payload 
            }; 
        default:
            return {
                ...state 
            };
    }
};


export default reducer; 


