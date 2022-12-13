import React, { useState, useRef } from "react";
import tree from "../img/xmastree.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import yellowneon_img from "../img/yellowneon.png";
//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1";
import html2canvas from "html2canvas";
import styled from "styled-components";
const DivTreeSection = styled.div`

border: 1px solid blue;
position: fixed;
left: 50%;
padding-left: 30px;
margin-top: 80px;
margin-bottom: 30px;

width: 400px;
height: 600px;
transform: translate(-50%,0);


`;
const Tree = () => {
  
  const [color, setColor] = useState("#409A13");
  const onCaptureClick = () => {
    const capture = document.getElementById("treeSection");
    //capture.style.width = "600px";
    //capture.style.height = "700px";

    //capture.style.paddingLeft='400px'
    //capture.style.paddingRight='40px'

    html2canvas(capture).then((canvas) => {
      saveAs(canvas.toDataURL("image/jpg"), "Tree.jpg");
    });
  };
  const saveAs = (uri, filename) => {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };
  //--Ball1------------//


  //---yellowneon------//
  const [yellowneon, setYellowneon] = useState(false);
  const getYellowneon = (yellowneon) => {
    console.log(yellowneon);
    setYellowneon(yellowneon);
    //console.log("state" ,state_yellowneon)
    
  };
  return (
    <div className="div-treepage-full">
      <DivTreeSection id="treeSection">
      
        <div className="div-tree" style={{ backgroundImage: `url(${tree})` }}  />
        <div className="div-yellowneon" style={{backgroundImage: `url(${yellowneon_img})`,display: yellowneon ? "block" : "none"}}/>
      
      </DivTreeSection>

      <div className="div-decoSection">
        <Deco  yellowneon={yellowneon} getYellowneon={getYellowneon}/>
        <Deco1 />
      </div>
      
      {/*<SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />*/}
      <div>
        <button onClick={onCaptureClick}>click</button>
      </div>
    </div>
  );
}
export default Tree;
export {DivTreeSection}