import React, { useState, useRef } from "react";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";

import Draggable from "react-draggable";
import YellowNeon from './deco_component/YellowNeon';
import Ball1 from "./deco_component/Ball1";
import Ball2 from "./deco_component/Ball2";
import Ball3 from "./deco_component/Ball3";
import Ball4 from "./deco_component/Ball4"
import Candy1 from "./deco_component/Candy1";
function Deco1() {


  return (
    <div className="div-deco-full">
      <Ball1/> {/* yellowneon이 맨 밑에 있어야 ball1이 제대로 작동함. */}
      <Ball2/>
      <Ball3/>
      <Ball4/>
      <Candy1/>
      
      
    </div>
  );
}

export default Deco1;
