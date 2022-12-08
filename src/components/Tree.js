import React, { useState, useRef } from "react";
import tree from "../img/xmastree.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1"
function Tree() {
  
  const [color, setColor] = useState("#409A13");
  return (
    <div className="div-treepage-full">
      <div className="div-treeSection">
        <div className="div-tree" style={{ backgroundImage: `url(${tree})` }} />
      </div>

      <div className="div-decoSection">
        <Deco />
        <Deco1 />
      
      </div>
      {/*<SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />*/}
    </div>
  );
}
export default Tree;
