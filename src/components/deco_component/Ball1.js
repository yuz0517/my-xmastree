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
export default function Ball1() {
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

  const [List, setList] = useState([]); //빈 배열 선언. 화면에 빈 화면만 보여주기 위함.
  const nextId = useRef(0);
  const onAddClick = useCallback(() => {
    const newball = {
      id: nextId.current,
    };
    setList(List.concat(newball));
    nextId.current += 1;
    console.log("List  is", List);
  }, [List]);
  const onBallClick = (index) => {
    console.log("onballclick", index, List, nodeRef);
  };
  const onRemoveClick = useCallback(
    (id) => {
      console.log("Ball1 doubleclick is ", id);
      /*const updateList  = List.filter((List) => List.index !== index);
    setList(updateList);*/
      setList(List.filter((newball) => newball.id !== id));
      console.log(List);
    },
    [List]
  );

  return (
    <div>
      <DivDeco>
        <DivExampleBall style={{ backgroundImage: `url(${ball1})` }}></DivExampleBall>

        <button className='AddButton' onClick={onAddClick}>
            <IoIosAddCircle/>
        </button>
      </DivDeco>
      <DivTreeSection>
      {List &&
        List.map((item) => (
          <Draggable
            key={item.id}
            ref={nodeRef}
            onDrag={(e, data) => trackBall1Pos(data)}
            onStart={handleStart}
            onStop={handleEnd}
          >
            <DivBall
              key={item.id}
              ref={nodeRef}
              onClick={() => onBallClick(item.id)}
              //className={`div-img-ball${index}`}
              onDoubleClick={() => onRemoveClick(item.id)}
              style={{ backgroundImage: `url(${ball1})` }}
            ></DivBall>
          </Draggable>
        ))}
        </DivTreeSection>
    </div>
  );
}
