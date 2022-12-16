import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Xmas from './pages/Xmas'
import { Context } from './components/Contextprovider'

function App() {
  const [Ball1List, setBall1List] = useState([]);
  const [Ball2List, setBall2List] = useState([]);
  const [Ball3List, setBall3List] = useState([]);
  return (
    <HashRouter > 
      <Context.Provider value={{ Ball1List, setBall1List,
                                 Ball2List, setBall2List, 
                                 Ball3List, setBall3List,
                                 }}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Xmas' element={<Xmas/>}/>
      </Routes>
      </Context.Provider>
    </HashRouter>
    
  );
}

export default App;
