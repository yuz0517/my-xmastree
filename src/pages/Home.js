import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import "./Home.css";
import snowman from "../assets/image/snowman.png";
import merryxmas from "../assets/image/merryxmas.png";
function Home() {
  const [time, setTime] = useState(0);
  const [addText, setText] = useState("");
  const [count, setCount] = useState(0);
  const TypeText = "Let's make a tree with me.";

  useEffect(() => {
    const interval = setInterval(() => {
      setText(addText + TypeText[count]);
      console.log(addText);
      setCount(count+1);
    }, 200); //0.2초마다 한 글자씩.
    if (count === TypeText.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const navigate = useNavigate();
  const onclickbutton = () => {
    navigate("/xmas");
  };
  return (
    <div className="div-Home">
      <div>
        <Snowfall snowflakeCount={100} />
        <div className="div-home-content">
          <button className="btn-home-enter" onClick={onclickbutton}>
            버튼
          </button>
          <p className="p-home-type"style={{ color: "orange" }}>{addText}</p>
          <img className="img-home-snowman" src={snowman}></img>
          <img className="img-home-merryxmas" src={merryxmas} width="150"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
