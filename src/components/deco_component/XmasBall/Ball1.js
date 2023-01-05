import React, { useContext, useState, useRef, useCallback } from "react";
import ball1 from "../../../assets/image/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";

import './Ball1.css';
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
const Ball1 = ({ }) => {
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
  const trackBall1Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  
 
  const nextId = useRef(0);
  const { Ball1List, setBall1List } = useContext(Context);
  //console.log("Ball1.js",nextId.current)
  const onAddClick = useCallback(() => {
    //console.log("넘어온 List는",List)
    //setBall1List(List);
    console.log(nextId.current);
    const newball = {
      id: nextId.current,
    };
    console.log("create ", newball.id)
    setBall1List(Ball1List.concat(newball));
    //console.log("after create", List)
    nextId.current += 1;
    //console.log("Ball1.js, List  is", List);
    //getList(BList);//Tree.js로 보낸다. 
  },[Ball1List]

  );
 

  return (
    <div>
      <DivDeco>
        <DivExampleBall style={{ backgroundImage: `url(${ball1})` }}></DivExampleBall>

        <button className='AddButton' onClick={onAddClick}>
            <IoIosAddCircle color="skyblue"/>
        </button>
      </DivDeco>
      
    </div>
  );
}

export default Ball1;