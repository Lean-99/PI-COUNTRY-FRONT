import { applyMiddleware, createStore, compose } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import reducer from "./reducer";

// Para conectar con la extesion del navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducer,
    composeEnhancers(applyMiddleware(ThunkMiddleware))
); 


export default store; 