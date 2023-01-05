import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import yellowneon_img from "../../img/yellowneon.png";
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

`;
const YellowNeon = ({ yellowneon, getYellowneon }) => {


  const [visible, setVisible] = useState(false);
  //const [yellowneon, setYellowneon] = useState(false)
    const onclicktest = () => {
        console.log(visible)
        setVisible(!visible)
        //yellowneon = visible; 

        getYellowneon(!yellowneon);
       
      };
    
  return (
    <div >
      <DivDeco>
        <DivExampleBall
          style={{ backgroundImage: `url(${yellowneon_img})` }}
        ></DivExampleBall>

        <button
          className="AddButton"
          onClick={onclicktest} 
        >
          <IoIosAddCircle color="skyblue"/>
        </button>
      </DivDeco>
      <div
        className="div-yellowneon"

      />
      
    </div>
  );
}

export default YellowNeon;
