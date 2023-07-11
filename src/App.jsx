//import { useState } from 'react'
import './App.css'
import { useLocation, Route, Routes } from 'react-router-dom';
import { LandingPage, Home, Detail, Form } from './views/indexViews';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail' element={<Detail />}/>
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
};

export default App

///prueba para gitHub
// prueba par gitHub 2 