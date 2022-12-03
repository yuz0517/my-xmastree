import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import tree from '../assets/image/xmastree.png';
import { SketchPicker } from 'react-color'
import styled from "styled-components";
import { ReactImageTint } from 'react-image-tint';
import './Xmas.css';
import Tree from '../components/Tree';
//`
const St_img=styled.img`
    className='img-tree';
    alt="tree" src={tree};
    tintColor = { color}
    //filter: opacity(0.5) drop-shadow(0 0 0, color)
`;
function Xmas() {
  
    
  return (
    <div>
        <Tree />
      
      
      
    </div>

  );
}


export default Xmas;