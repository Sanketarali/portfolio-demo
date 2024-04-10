import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Trending from './pages/Trending';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/trending' element={ <Trending /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
