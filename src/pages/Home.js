import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Snowfall from 'react-snowfall';
import './Home.css'
import snowman from '../assets/image/snowman.png'

function Home() {
  const navigate = useNavigate();
  const onclickbutton = () => {
    navigate("/xmas");
  }
  return (
    <div className='div-Home'>
      <Snowfall snowflakeCount={100}/>
      <button onClick={onclickbutton}>버튼</button>
      <img className='img-home-snowman' src={snowman} width="500"></img>
    </div>

  );
}

export default Home