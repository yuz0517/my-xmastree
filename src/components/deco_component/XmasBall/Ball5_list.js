import { useContext, useState, useRef, useCallback } from "react";
import ball5 from "../../../assets/image/xball5.png";
import React from "react";
import { DivTreeSection } from "../../Tree";
import styled from "styled-components";
import Draggable from "react-draggable";
import { Context } from "../../Contextprovider";

const DivBall = styled.div`


  position: fixed;

  width: 27.5px;
  height: 30px;
  background-size: 28px;
`;
const Ball5_list = ({  }) => {
  //Draggable 관련 변수, 함수들

  const { Ball5List, setBall5List } = useContext(Context);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const trackBall5Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };


  const onBallClick = (index) => {
    console.log("Ball5_List.js: onballclick", index);

  };

  const onRemoveClick = useCallback(
    (id) => {
      
      //console.log("넘어온 리시트는",List);
      console.log("Ball5 doubleclick is ", id,Ball5List);
      /*const updateList  = List.filter((List) => List.index !== index);
      setList(updateList);*/
      setBall5List(Ball5List.filter((newball) => newball.id !== id));
      

    },[Ball5List]
  );
  return (
    <>
      
        {Ball5List &&
          Ball5List.map((item) => (
            <Draggable
              key={item.id}
             
              onDrag={(e, data) => trackBall5Pos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <DivBall
                key={item.id}
                
                onClick={() => onBallClick(item.id)}
                //className={`div-img-ball${index}`}
                onDoubleClick={() => onRemoveClick(item.id)}
                style={{ backgroundImage: `url(${ball5})` }}
              ></DivBall>
            </Draggable>
          ))}
      
    </>
  );
};

export default Ball5_list;
