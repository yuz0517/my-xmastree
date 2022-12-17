import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

import tree from "../img/xmastree.png";
import yellowneon_img from "../img/yellowneon.png";
import redneon_img from "../img/redneon.png"
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";

//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1";

import styled from "styled-components";
import Ball1_list from "./deco_component/Ball1_list";
import Ball2_list from "./deco_component/Ball2_list";
import Ball3_list from "./deco_component/Ball3_list";
const DivTreeSection = styled.div`

border: 1px solid blue;
margin-top: 80px;
margin-bottom: 30px;
width: 350px;
height: 600px;



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
  };
  //----Redneon-----//
  const[redneon,  setRedneon] = useState(false);

  const getRedneon = (Redneon) => {
    
    setRedneon(Redneon);
  };
  return (
    <div className="div-treepage-full">
      <DivTreeSection id="treeSection">
         
        <div className="div-tree" style={{ backgroundImage: `url(${tree})` }}  />
        <div className="div-yellowneon" style={{backgroundImage: `url(${yellowneon_img})`,display: yellowneon ? "block" : "none"}}/>
        
        <div className="div-redneon" style={{backgroundImage: `url(${redneon_img})`,display: redneon ? "block" : "none"}}/>
        <Ball1_list />
        <Ball2_list />
        <Ball3_list/>
      </DivTreeSection>
      
      <div className="div-decoSection">
        <Deco  yellowneon={yellowneon} getYellowneon={getYellowneon} 
               redneon={redneon} getRedneon = {getRedneon} nextId={nextId}
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
        <button onClick={onCaptureClick}
                className='btn-download'/>
      </div>
    </div>
  );
}
export default Tree;
export {DivTreeSection}