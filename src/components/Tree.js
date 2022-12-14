import React, { useState, useRef } from "react";
import tree from "../img/xmastree.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import yellowneon_img from "../img/yellowneon.png";
//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1";
import Ball1 from "./deco_component/Ball1";
import html2canvas from "html2canvas";
import styled from "styled-components";
import Ball1_list from "./deco_component/Ball1_list";
const DivTreeSection = styled.div`

border: 1px solid blue;
position: fixed;
left: 50%;

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
  //---Ball1------------//
  const [List, setList] = useState([]);
    const nextId = useRef(0);
  const getList = (List) => {
    console.log("Tree.js befroe ,",List)
    setList(List);
    console.log("Tree.js getList()", List)
  };

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
        <Ball1_list List={List} getList={getList} ></Ball1_list>
      </DivTreeSection>
      
      <div className="div-decoSection">
        <Deco  yellowneon={yellowneon} getYellowneon={getYellowneon} nextId={nextId}
               List={List} getList={getList}/>
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