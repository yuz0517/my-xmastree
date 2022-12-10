import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import yellowneon from "../../img/yellowneon.png";
import "./YellowNeon.css";

const DivExampleBall = styled.div`
margin: auto;
width: 27.5px;
height: 30px;
background-size: 28px;
`;
const DivDeco = styled.div`
margin-top: 10px;
text-align: center;
width: 40px;
height: 70px;
border: 1px solid blue;
`;
export default function YellowNeon({yellowneon}) {


  const [visible, setVisible] = useState(false);
    console.log(visible);
    const onclicktest = useCallback(()=> {
        yellowneon("yellowneon");
        console.log(visible)
      },[visible]);
    
  return (
    <div>
      <DivDeco>
        <DivExampleBall
          style={{ backgroundImage: `url(${yellowneon})` }}
        ></DivExampleBall>

        <button
          className="AddButton"
          onClick={() => {onclicktest();
            setVisible((visible)=>!visible)
            
          }} 
        >
          <IoIosAddCircle />
        </button>
      </DivDeco>
      <div
        className="div-yellowneon"

      />
      <div
        className="div-yellowneon"
        style={{
          backgroundImage: `url(${yellowneon})`,
          display: visible ? "block" : "none"
        }}
      />
    </div>
  );
}
