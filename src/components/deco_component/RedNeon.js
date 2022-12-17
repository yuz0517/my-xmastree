import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import Redneon_img from "../../assets/image/redneon.png";


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
const RedNeon = ({ Redneon, getRedneon }) => {


  const [visible, setVisible] = useState(false);
  //const [yellowneon, setYellowneon] = useState(false)
    const onclicktest = () => {
        console.log(visible)
        setVisible(!visible)
        //Redneon = visible; 

        getRedneon(visible);
       
      };
    
  return (
    <div>
      <DivDeco>
        <DivExampleBall
          style={{ backgroundImage: `url(${Redneon_img})` }}
        ></DivExampleBall>

        <button
          className="AddButton"
          onClick={onclicktest} 
        >
          <IoIosAddCircle />
        </button>
      </DivDeco>
      <div
        className="div-redwneon"

      />
      
    </div>
  );
}

export default RedNeon;
