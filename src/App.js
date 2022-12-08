import React  from 'react';
import { Routes, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Xmas from './pages/Xmas'

function App() {
  return (
    <HashRouter > 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Xmas' element={<Xmas/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
