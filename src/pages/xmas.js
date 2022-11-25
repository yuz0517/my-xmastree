import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import tree from '../assets/image/xmastree.png';
import { SketchPicker } from 'react-color'
import styled from "styled-components";
import { ReactImageTint } from 'react-image-tint';
import './Xmas.css';
//`
const St_img=styled.img`
    //filter: opacity(0.5) drop-shadow(0 0 0, color)
`;
function Xmas() {
   const [color, setColor] = useState("#409A13");
    
  return (
    <div>
        <p>sdf</p>
      <img className='img-tree' alt="tree" src={tree}
              tintColor = { color}
      />
      <ReactImageTint src={tree} color={color} />;
      <SketchPicker 
        color={ color }
        onChangeComplete={ (color) => {setColor(color.hex)} }/>
    </div>

  );
}


export default Xmas;