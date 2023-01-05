import React, { useContext, useState, useRef, useCallback } from "react";
import ball3 from "../../../assets/image/xball3.png";
import styled from "styled-components";

import { IoIosAddCircle } from 'react-icons/io';
import { DivTreeSection } from "../../Tree";
import { Context } from '../../Contextprovider';
const DivBall = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  margin: auto;
  width: 27.5px;
  height: 30px;
  background-size: 28px;
`;
const DivExampleBall = styled.div`

  margin: auto;
  width: 27.5px;
  height: 30px;
  background-size: 28px;
`;
const DivDeco = styled.div`
  margin-top:10px;
  text-align: center;
  width: 40px;
  height: 70px;

  
`;
const Ball3 = () => {
  const ref = React.createRef();
  //Draggable 관련 변수, 함수들
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const trackBall3Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  
  const nextId = useRef(0);
  const { Ball3List, setBall3List } = useContext(Context);
  //console.log("Ball3.js",nextId.current)
  const onAddClick = useCallback(() => {
    console.log(nextId.current);
    const newball = {
      id: nextId.current,
    };
    console.log("create ", newball.id)
    setBall3List(Ball3List.concat(newball));
    nextId.current += 1;
  },[Ball3List]

  );
 

  return (
    <div>
      <DivDeco>
        <DivExampleBall style={{ backgroundImage: `url(${ball3})` }}></DivExampleBall>

        <button className='AddButton' onClick={onAddClick}>
            <IoIosAddCircle color="skyblue"/>
        </button>
      </DivDeco>
      
    </div>
  );
}

export default Ball3;