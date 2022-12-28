import { useContext, useState, useRef, useCallback } from "react";
import candle1 from "../../../assets/image/candle1.png";
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
const Candle1_list = ({  }) => {
  //Draggable 관련 변수, 함수들

  const { Candle1List, setCandle1List } = useContext(Context);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const trackCandle1Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };


  const onBallClick = (index) => {
    console.log("Candle1_List.js: onballclick", index);

  };

  const onRemoveClick = useCallback(
    (id) => {
      
      //console.log("넘어온 리시트는",List);
      console.log("Candle1 doubleclick is ", id,Candle1List);
      /*const updateList  = List.filter((List) => List.index !== index);
      setList(updateList);*/
      setCandle1List(Candle1List.filter((newball) => newball.id !== id));
      

    },[Candle1List]
  );
  return (
    <>
      
        {Candle1List &&
          Candle1List.map((item) => (
            <Draggable
              key={item.id}
             
              onDrag={(e, data) => trackCandle1Pos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <DivBall
                key={item.id}
                
                onClick={() => onBallClick(item.id)}
                //className={`div-img-ball${index}`}
                onDoubleClick={() => onRemoveClick(item.id)}
                style={{ backgroundImage: `url(${candle1})` }}
              ></DivBall>
            </Draggable>
          ))}
      
    </>
  );
};

export default Candle1_list;
