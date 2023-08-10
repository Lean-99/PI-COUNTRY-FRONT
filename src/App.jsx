import { useState } from 'react'
import './App.css'
import { useLocation, Route, Routes } from 'react-router-dom';
import { LandingPage, Home, Detail } from './views/indexViews';
import NavBar from './components/NavBar/NavBar';


function App() {
  
  
  //const {pathname} = useLocation();
  
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  )
};

export default App

///prueba para gitHub
// prueba par gitHub 2 