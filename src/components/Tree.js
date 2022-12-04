import React, { useState } from "react";
import tree from '../assets/image/xmastree.png';
import ball1 from '../assets/image/xball1.png';
import { SketchPicker } from 'react-color'
import styled from "styled-components";
import Draggable from 'react-draggable'
import { ReactImageTint } from 'react-image-tint';
const St_img = styled.img`
className='img-tree';
alt="tree" src={tree};
tintColor = { color}
//filter: opacity(0.5) drop-shadow(0 0 0, color)
`;
function Tree() {
    const [color, setColor] = useState("#409A13");
  return (
    <>
      <img className="img-tree" alt="tree" src={tree} tintColor={color} />
      <St_img />
      <ReactImageTint src={tree} color={color} />;
      <SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <Draggable>
      <img className="img-ball1" alt="ball1" src={ball1} />
      
      </Draggable>
    </>
  );
}
 export default Tree;