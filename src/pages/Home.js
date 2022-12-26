import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './Home.css'
function Home() {
  const navigate = useNavigate();
  const onclickbutton = () => {
    navigate("/xmas");
  }
  return (
    <div className='div-Home'>
      <button onClick={onclickbutton}>버튼</button>
    </div>

  );
}

export default Home