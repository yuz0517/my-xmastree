import React, { useState, useRef } from "react";


import Ball1 from "./deco_component/XmasBall/Ball1";
import Ball2 from "./deco_component/XmasBall/Ball2";
import Ball3 from "./deco_component/XmasBall/Ball3";
import Ball4 from "./deco_component/XmasBall/Ball4";
import Ball5 from "./deco_component/XmasBall/Ball5";
import Candy1 from "./deco_component/Candy1";
function Deco1() {


  return (
    <div className="div-deco-full">
      <Ball1/> {/* yellowneon이 맨 밑에 있어야 ball1이 제대로 작동함. */}
      <Ball2/>
      <Ball3/>
      <Ball4/>
      <Ball5/>
      <Candy1/>
      
      
    </div>
  );
}

export default Deco1;
