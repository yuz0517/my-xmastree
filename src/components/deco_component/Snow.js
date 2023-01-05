import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import Snow1_img from "../../assets/image/snow1.png";


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
const Snow = ({ snow1, getsnow1 }) => {


  const [visible, setVisible] = useState(false);
  //const [yellowneon, setYellowneon] = useState(false)
    const onclicktest = () => {
        console.log(visible)
        setVisible(!visible)
        //Snow1 = visible; 

        getsnow1(visible);
       
      };
    
  return (
    <div>
      <DivDeco>
        <DivExampleBall
          style={{ backgroundImage: `url(${Snow1_img})` }}
        ></DivExampleBall>

        <button
          className="AddButton"
          onClick={onclicktest} 
        >
          <IoIosAddCircle color="skyblue"/>
        </button>
      </DivDeco>
      <div
        

      />
      
    </div>
  );
}

export default Snow;
