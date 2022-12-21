import { useContext, useState, useRef, useCallback } from "react";
import candy1 from "../../assets/image/candy1.png";
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
const Candy1_list = ({  }) => {
    //Draggable 관련 변수, 함수들
  
    const { Candy1List, setCandy1List } = useContext(Context);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [Opacity, setOpacity] = useState(false);
    const handleStart = () => {
      setOpacity(true);
    };
    const handleEnd = () => {
      setOpacity(false);
    };
    const trackCandy1Pos = (data) => {
      setPosition({ x: data.x, y: data.y });
    };
  
  
    const onCandy1Click = (index) => {
      console.log("Candy1_List.js: onballclick", index);
  
    };
  
    const onRemoveClick = useCallback(
      (id) => {
        
        //console.log("넘어온 리시트는",List);
        console.log("Candy1 doubleclick is ", id,Candy1List);
        /*const updateList  = List.filter((List) => List.index !== index);
        setList(updateList);*/
        setCandy1List(Candy1List.filter((newball) => newball.id !== id));
        
  
      },[Candy1List]
    );
    return (
      <>
        
          {Candy1List &&
            Candy1List.map((item) => (
              <Draggable
                key={item.id}
               
                onDrag={(e, data) => trackCandy1Pos(data)}
                onStart={handleStart}
                onStop={handleEnd}
              >
                <DivBall
                  key={item.id}
                  
                  onClick={() => onCandy1Click(item.id)}
                  //className={`div-img-ball${index}`}
                  onDoubleClick={() => onRemoveClick(item.id)}
                  style={{ backgroundImage: `url(${candy1})` }}
                ></DivBall>
              </Draggable>
            ))}
        
      </>
    );
  };
  
  export default Candy1_list;
  