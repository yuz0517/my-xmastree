import React  from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Xmas from './pages/Xmas'
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Xmas' element={<Xmas/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
