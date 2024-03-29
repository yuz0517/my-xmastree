import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Snowfall from "react-snowfall";
import tree from "../img/xmastree.png";
import flowerneon_img from "../assets/image/flowerneon.png";
import snow1_img from "../assets/image/snow1.png";
import yellowneon_img from "../img/yellowneon.png";
import redneon_img from "../img/redneon.png";
import ball1 from "../img/xball1.png";
import { SketchPicker } from "react-color";

//import { ReactImageTint } from "react-image-tint";
import "./Tree.css";
import Deco from "./Deco";
import Deco1 from "./Deco1";
import Deco2 from "./Deco2";

import { BiQuestionMark } from "react-icons/bi";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Ball1_list from "./deco_component/XmasBall/Ball1_list";
import Ball2_list from "./deco_component/XmasBall/Ball2_list";
import Ball3_list from "./deco_component/XmasBall/Ball3_list";
import Ball4_list from "./deco_component/XmasBall/Ball4_list";
import Ball5_List from "./deco_component/XmasBall/Ball5_list";
import Candy1_list from "./deco_component/Candy1_list";
import Candle1_list from "./deco_component/Others/Candle1_list";
import camera from "../assets/image/camera.png";
const DivTreeSection = styled.div`
  border: 3px solid skyblue;
  margin-top: 80px;
  margin-bottom: 30px;
  width: 350px;
  height: 600px;
`;
const Tree = () => {
  const [color, setColor] = useState("#409A13");
  const onCaptureClick = () => {
    const capture = document.getElementById("treeSection");
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
    console.log("Tree.js befroe ,", List);
    setList(List);
    console.log("Tree.js getList()", List);
  };

  //---yellowneon------//
  const [flowerneon, setflowerneon] = useState(false);

  const getflowerneon = (flowerneon) => {
    console.log(flowerneon);
    setflowerneon(flowerneon);
  };

  //---yellowneon------//
  const [yellowneon, setYellowneon] = useState(false);

  const getYellowneon = (yellowneon) => {
    console.log(yellowneon);
    setYellowneon(yellowneon);
  };
  //----Redneon-----//
  const [redneon, setRedneon] = useState(false);

  const getRedneon = (Redneon) => {
    setRedneon(Redneon);
  };
  //----snow1-----//
  const [snow1, setsnow1] = useState(false);

  const getsnow1 = (snow1) => {
    setsnow1(snow1);
  };
  return (
    <div className="div-treepage-full">
      <DivTreeSection id="treeSection">
        <div className="div-tree" style={{ backgroundImage: `url(${tree})` }} />
        <div
          className="div-yellowneon"
          style={{
            backgroundImage: `url(${yellowneon_img})`,
            display: yellowneon ? "block" : "none",
          }}
        />

        <div
          className="div-redneon"
          style={{
            backgroundImage: `url(${redneon_img})`,
            display: redneon ? "block" : "none",
          }}
        />
        <div
          className="div-flowerneon"
          style={{
            backgroundImage: `url(${flowerneon_img})`,
            display: flowerneon ? "block" : "none",
          }}
        />
        <div
          className="div-snow1"
          style={{
            backgroundImage: `url(${snow1_img})`,
            display: snow1 ? "block" : "none",
          }}
        />
        <Ball1_list />
        <Ball2_list />
        <Ball3_list />
        <Candy1_list />
        <Ball4_list />
        <Ball5_List />
        <Candle1_list />
      </DivTreeSection>
      <div className="div-section">
        <div className="div-decoSection">
          <Deco2 />
          <Deco1 />
          <Deco
            flowerneon={flowerneon}
            getflowerneon={getflowerneon}
            snow1={snow1}
            getsnow1={getsnow1}
            yellowneon={yellowneon}
            getYellowneon={getYellowneon}
            redneon={redneon}
            getRedneon={getRedneon}
            nextId={nextId}
            List={List}
            getList={getList}
          />
        </div>
      </div>
      <div className="div-tooltip">
      <button onClick={onCaptureClick} className="btn-download">
          
          </button>
        <p
          id="tooltip-snowman"
          className="p-snowman"
          data-tooltip-html="Make your own X-mas Tree!<br />Drag your favorite decorations and place them on the Tree"
        >
          ☃️
        </p>
        <Tooltip anchorId="tooltip-snowman" place="top" />
        <p
          id="tooltip-santa"
          className="p-santa"
          data-tooltip-html="For Download, Adjust the browser size  to fit the x-mas tree in the square box"
        >
          🤶
        </p>
        <Tooltip anchorId="tooltip-santa" place="top" />

        <p
          id="tooltip-snow"
          className="p-snow"
          data-tooltip-html="Add the decoration and DoubleClick to delete it "
        >
          ❄️
        </p>
      
        <Tooltip anchorId="tooltip-snow" place="right" />
      
        
      </div>
      <div>
        {" "}
        <Snowfall />
      </div>

      {/*<SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />*/}

      <div>
        
      </div>
    </div>
  );
};
export default Tree;
export { DivTreeSection };
