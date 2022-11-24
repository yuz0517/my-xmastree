import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const onclickbutton = () => {
    navigate("/xmas");
  }
  return (
    <div>
      <button onClick={onclickbutton}>버튼</button>
    </div>

  );
}

export default Home