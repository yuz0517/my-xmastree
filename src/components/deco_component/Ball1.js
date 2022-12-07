import React, { useState, useRef, useCallback } from "react";
import ball1 from "../../assets/image/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
import CreateBall1 from "./CreateBall1";
import "./Ball1.css";

const DivBall = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  margin: auto;
  width: 30px;
  height: 30px;
  background-size: 28px;
`;
export default function Ball1() {
  const ref = React.createRef();
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

  const [List, setList] = useState([{ id: 0 }]);
  const nextId = useRef(1);
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
            >
              ${item.id}
            </DivBall>
          </Draggable>
        ))}
      {/*<Draggable
        nodeRef={nodeRef}
        onDrag={(e, data) => trackBall1Pos(data)}
        onStart={handleStart}
        onStop={handleEnd}
      >
        <div
          ref={nodeRef}
          className="div-img-ball1"
          style={{ backgroundImage: `url(${ball1})` }}
        >
          {" "}
        </div>
        </Draggable>*/}

      <button onClick={onAddClick}>+</button>
    </div>
  );
}
