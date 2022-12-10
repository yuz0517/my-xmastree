import React, { useState, useRef } from "react";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
import "./Deco.css";
import Ball1 from './deco_component/Ball1'
import YellowNeon from "./deco_component/YellowNeon";
function Deco() {

  return (
    <div className="div-deco-full">
      
      <YellowNeon yellowneon={yellowneon}/>
      <Ball1/> {/* yellowneon이 맨 밑에 있어야 ball1이 제대로 작동함. */}
        
      
    </div>
  );
}

export default Deco;
