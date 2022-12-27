import { useContext, useState, useRef, useCallback } from "react";
import ball4 from "../../../assets/image/xball4.png";
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
const Ball4_list = ({  }) => {
  //Draggable 관련 변수, 함수들

  const { Ball4List, setBall4List } = useContext(Context);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const trackBall4Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };


  const onBallClick = (index) => {
    console.log("Ball4_List.js: onballclick", index);

  };

  const onRemoveClick = useCallback(
    (id) => {
      
      //console.log("넘어온 리시트는",List);
      console.log("Ball4 doubleclick is ", id,Ball4List);
      /*const updateList  = List.filter((List) => List.index !== index);
      setList(updateList);*/
      setBall4List(Ball4List.filter((newball) => newball.id !== id));
      

    },[Ball4List]
  );
  return (
    <>
      
        {Ball4List &&
          Ball4List.map((item) => (
            <Draggable
              key={item.id}
             
              onDrag={(e, data) => trackBall4Pos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <DivBall
                key={item.id}
                
                onClick={() => onBallClick(item.id)}
                //className={`div-img-ball${index}`}
                onDoubleClick={() => onRemoveClick(item.id)}
                style={{ backgroundImage: `url(${ball4})` }}
              ></DivBall>
            </Draggable>
          ))}
      
    </>
  );
};

export default Ball4_list;
