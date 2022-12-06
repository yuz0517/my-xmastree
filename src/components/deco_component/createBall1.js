import React, { useState, useRef } from "react";
import ball1 from "../../assets/image/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
const CreateBall1 = (props) => {
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

  //const [List, setList] = useState([0]);
  return (
    <>
      {props.List &&
        props.List.map((item, index) => (
          <Draggable
            nodeRef={nodeRef}
            onDrag={(e, data) => trackBall1Pos(data)}
            onStart={handleStart}
            onStop={handleEnd}
          >
            <div
              key={index}
              ref={nodeRef}
              className="div-img-ball1"
              style={{ backgroundImage: `url(${ball1})` }}
              
            >
              {" "}
            </div>
          </Draggable>
        ))}
    </>
  );
};

export default CreateBall1;
