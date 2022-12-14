import React, { useState, useRef, useCallback } from "react";
import ball1 from "../../assets/image/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
import CreateBall1 from "./CreateBall1";
import './Ball1.css';
import { IoIosAddCircle } from 'react-icons/io';
import { DivTreeSection } from "../Tree";
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
  border: 1px solid blue;
  
`;
const Ball1 = ({ List, getList}) => {
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
  
  const [BList, setList] = useState([]); //빈 배열 선언. 화면에 빈 화면만 보여주기 위함.
  const nextId = useRef(0);
  
  //console.log("Ball1.js",nextId.current)
  const onAddClick =() => {
    console.log("넘어온 List는",List)
    setList(List);
    console.log(nextId.current);
    const newball = {
      id: nextId.current,
    };
    console.log("create ", newball.id,List)
    setList(BList.concat(newball));
    console.log("after create", List)
    nextId.current += 1;
    //console.log("Ball1.js, List  is", List);
    getList(BList);//Tree.js로 보낸다. 
  };
 

  return (
    <div>
      <DivDeco>
        <DivExampleBall style={{ backgroundImage: `url(${ball1})` }}></DivExampleBall>

        <button className='AddButton' onClick={onAddClick}>
            <IoIosAddCircle/>
        </button>
      </DivDeco>
      
    </div>
  );
}

export default Ball1;