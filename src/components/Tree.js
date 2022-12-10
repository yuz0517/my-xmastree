import React, { useState, useRef } from "react";
import tree from "../img/xmastree.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import Draggable from "react-draggable";
//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1";
import html2canvas from "html2canvas";
function Tree() {
  const [color, setColor] = useState("#409A13");
  const onCaptureClick = () => {
    const capture = document.getElementById("div-treeSection");
    capture.style.width = "300px";
    capture.style.height = "700px";

    //capture.style.paddingLeft='50px'
    //capture.style.paddingRight='40px'

    html2canvas(capture).then((canvas) => {
      saveAs(canvas.toDataURL("image/jpg"), "Tree.jpg");
    });
  };
  const saveAs = (uri, filename) => {
    let link = document.createElement("a");
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
  return (
    <div className="div-treepage-full">
      <div className="div-treeSection" id="div-treeSections">
        <div className="div-tree" style={{ backgroundImage: `url(${tree})` }} />
      </div>

      <div className="div-decoSection" id="div-treeSection">
        <Deco  />
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
