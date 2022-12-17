import { useContext, useState, useRef, useCallback } from "react";
import ball1 from "../../assets/image/xball1.png";
import React from "react";
import { DivTreeSection } from "../Tree";
import styled from "styled-components";
import Draggable from "react-draggable";
import { Context } from "../Contextprovider";

const DivBall = styled.div`


  position: fixed;

  width: 27.5px;
  height: 30px;
  background-size: 28px;
`;
const Ball1_list = ({ nextId }) => {
  //Draggable 관련 변수, 함수들

  const { Ball1List, setBall1List } = useContext(Context);
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

  const [BList, setList] = useState([]);  
  const onBallClick = (index) => {
    console.log("Ball1_List.js: onballclick", index);
    //console.log(BList)
  };

  const onRemoveClick = useCallback(
    (id) => {
      
      //console.log("넘어온 리시트는",List);
      console.log("Ball1 doubleclick is ", id,Ball1List);
      /*const updateList  = List.filter((List) => List.index !== index);
      setList(updateList);*/
      setBall1List(Ball1List.filter((newball) => newball.id !== id));
      
      
    },[Ball1List]
  );
  return (
    <>
      
        {Ball1List &&
          Ball1List.map((item) => (
            <Draggable
              key={item.id}
              ref={nextId}
              onDrag={(e, data) => trackBall1Pos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <DivBall
                key={item.id}
                ref={nextId}
                onClick={() => onBallClick(item.id)}
                //className={`div-img-ball${index}`}
                onDoubleClick={() => onRemoveClick(item.id)}
                style={{ backgroundImage: `url(${ball1})` }}
              ></DivBall>
            </Draggable>
          ))}
      
    </>
  );
};

export default Ball1_list;
