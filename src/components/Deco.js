import React, { useState, useRef } from "react";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
import "./Deco.css";

import Candy1 from './deco_component/Candy1'
import Flowerneon from "./deco_component/Flowerneon";
import Snow1 from "./deco_component/Snow";
import RedNeon from "./deco_component/RedNeon";
import YellowNeon from "./deco_component/YellowNeon";
function Deco({yellowneon, getYellowneon, 
               Redneon, getRedneon,
              snow1, getsnow1,flowerneon,getflowerneon}) {
  
  return (
    <div className="div-deco-full">
      
      <YellowNeon yellowneon={yellowneon} getYellowneon={getYellowneon}/>
      <RedNeon Redneon={Redneon} getRedneon={getRedneon}/>
      <Snow1 Snow1={snow1} getsnow1={getsnow1}/>
      <Flowerneon  flowerneon={flowerneon} getflowerneon={getflowerneon}/>
    </div>
  );
  }

export default Deco;
