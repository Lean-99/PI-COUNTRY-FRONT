import {
    ALL_GAMES,
    GAMES_BY_ID,
    GAME_BY_NAME
} from './actions-types'; 


const initialState = {
    videogames: [],
    game: [],
    detail: []
}; 



function reducer(state = initialState, action)  {
    switch (action.type) {
        case ALL_GAMES:
            return {
                ...state,
                videogames: action.payload,
               // detail: action.payload 
            };
        case GAMES_BY_ID: 
            return {
                ...state,
                detail: action.payload
            };
        case GAME_BY_NAME:
            return {
                ...state,
                game: action.payload
            }
        default: 
            return {
                ...state
            };
        }
    };
    

export default reducer;  
    
    
    
    /* case COUNTRY_BY_ID:
         return {
             ...state,
             detail: action.paylod
         }; 
     
     default:
         return {
             ...state 
         };*/