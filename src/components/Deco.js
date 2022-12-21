import React, { useState, useRef } from "react";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
import "./Deco.css";
import Ball1 from './deco_component/Ball1'
import Ball2 from './deco_component/Ball2'
import Ball3 from './deco_component/Ball3'
import Candy1 from './deco_component/Candy1'
import RedNeon from "./deco_component/RedNeon";
import YellowNeon from "./deco_component/YellowNeon";
function Deco({yellowneon, getYellowneon, 
               Redneon, getRedneon}) {
  
  return (
    <div className="div-deco-full">
      
      <YellowNeon yellowneon={yellowneon} getYellowneon={getYellowneon}/>
      <RedNeon Redneon={Redneon} getRedneon={getRedneon}/>
      <Ball1/> {/* yellowneon이 맨 밑에 있어야 ball1이 제대로 작동함. */}
      <Ball2/>
      <Ball3/>
      <Candy1/>
    </div>
  );
  }

export default Deco;
