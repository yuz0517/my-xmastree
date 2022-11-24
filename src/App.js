import React  from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import xmas from './pages/xmas'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/xams' element={<xmas />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
