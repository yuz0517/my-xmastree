import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Snowfall from 'react-snowfall';
import './Home.css'
import snowman from '../assets/image/snowman.png'
import merryxmas from '../assets/image/merryxmas.png'
function Home() {
  const navigate = useNavigate();
  const onclickbutton = () => {
    navigate("/xmas");
  }
  return (
    <div className='div-Home'>
      <div>
      <Snowfall snowflakeCount={100}/>
      <button onClick={onclickbutton}>버튼</button>
      <img className='img-home-snowman' src={snowman} width="500"></img>
      <img className='img-home-merryxmas' src={merryxmas} width="150"></img>

      </div>
    </div>

  );
}

export default Home