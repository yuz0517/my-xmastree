import React, { useState, useRef } from "react";
import tree from "../assets/image/xmastree.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
//import { ReactImageTint } from "react-image-tint";
import './Tree.css'
import Deco from './Deco'
function Tree() {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x:0, y:0 });
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  }
  const handleEnd = () => {
    setOpacity(false);
  }
  const trackBall1Pos = (data) => {
    setPosition({ x: data.x, y: data.y });
  }
  const [color, setColor] = useState("#409A13");
  return (
    <>
      <img className="img-tree" alt="tree" src={tree} tintcolor={color} />
      
      <div 
             className="div-img-ball3"
             style={{ backgroundImage: `url(${ball1})` }} />
      
      <Deco/>
      {/*<SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />*/}
      
      
    </>
  );
}
export default Tree;
