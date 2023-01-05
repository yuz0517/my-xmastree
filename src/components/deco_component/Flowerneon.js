import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import flowerneon_img from "../../assets/image/flowerneon.png";


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
const Flowerneon = ({ flowerneon, getflowerneon }) => {


  const [visible, setVisible] = useState(false);
    const onclicktest = () => {
        console.log(visible)
        setVisible(!visible)
        getflowerneon(visible);
       
      };
    
  return (
    <div>
      <DivDeco>
        <DivExampleBall
          style={{ backgroundImage: `url(${flowerneon_img})` }}
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

export default Flowerneon;
