import { useContext, useState, useRef, useCallback } from "react";
import ball2 from "../../assets/image/xball2.png";
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
const Ball2_list = ({ List,getList, nextId }) => {
  //Draggable 관련 변수, 함수들

  const { Ball2List, setBall2List } = useContext(Context);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const trackBall2Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [BList, setList] = useState([]);  
  const onBallClick = (index) => {
    console.log("Ball2_List.js: onballclick", index, List);
    //console.log(BList)
  };

  const onRemoveClick = useCallback(
    (id) => {
      setList(List)
      //console.log("넘어온 리시트는",List);
      console.log("Ball2 doubleclick is ", id,Ball2List);
      /*const updateList  = List.filter((List) => List.index !== index);
      setList(updateList);*/
      setBall2List(Ball2List.filter((newball) => newball.id !== id));
      
      getList(BList);
    },[Ball2List]
  );
  return (
    <>
      
        {Ball2List &&
          Ball2List.map((item) => (
            <Draggable
              key={item.id}
              ref={nextId}
              onDrag={(e, data) => trackBall2Pos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <DivBall
                key={item.id}
                ref={nextId}
                onClick={() => onBallClick(item.id)}
                //className={`div-img-ball${index}`}
                onDoubleClick={() => onRemoveClick(item.id)}
                style={{ backgroundImage: `url(${ball2})` }}
              ></DivBall>
            </Draggable>
          ))}
      
    </>
  );
};

export default Ball2_list;
