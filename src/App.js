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
  const [Ball4List, setBall4List] = useState([]);
  const [Ball5List, setBall5List] = useState([]);
  const [Candy1List, setCandy1List] = useState([]);
  const [Candle1List, setCandle1List] = useState([]);
  return (
    <HashRouter > 
      <Context.Provider value={{ Ball1List, setBall1List,
                                 Ball2List, setBall2List, 
                                 Ball3List, setBall3List,
                                 Ball4List, setBall4List, 
                                 Ball5List, setBall5List,
                                 Candy1List, setCandy1List,
                                 Candle1List, setCandle1List,
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
