import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/resume'; // Corrected import with uppercase R

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} /> {/* Corrected usage of Resume */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
