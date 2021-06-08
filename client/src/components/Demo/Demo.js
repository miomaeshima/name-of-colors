import React, { useState, Fragment } from "react";
import beigestones from "../images/beigestones.jpg";
import { getRgb, getRgbOfImg } from "../utility.js";
import { LinkToTop, Refresh } from "../NavLinks/NavLinks.js";
import "./Demo.css";

const Demo = () => {
  const [colorData, setColorData] = useState({});
  const [demoColor, setDemoColor] = useState("lightgoldenrodyellow");

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColorData(data);
    setDemoColor(`rgb(${data.r}, ${data.g}, ${data.b})`);
  };

  const getDemoColor = async (e) => {
    let realTarget = e.target.previousElementSibling;
    let data = await getRgbOfImg(realTarget);
    setColorData(data);
    setDemoColor(`rgb(${data.r}, ${data.g}, ${data.b})`);
  };

  const refresh = () => {
    setDemoColor("lightgoldenrodyellow");
    setColorData({});
  };

  let fontColor;
  if ((colorData.r * 299 + colorData.g * 587 + colorData.b * 114) / 1000 < 128) {
    fontColor = { color: "white" };
  } else {
    fontColor = { color: "black" };
  }

  return (
    <Fragment>
      <div
        id="demoContainer"
        style={{ background: demoColor }}
      >
        <div id="photoContainer">
          <img
            id="demoImage"
            alt="beige stone pebbles"
            onClick={getColor}
            src={beigestones}
          />
          {Object.keys(colorData).length === 0 ? (
            <div id="demoText" onClick={getDemoColor}>
              写真をクリックすると、この写真で一番使われている色の名前が分かります。
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div id="demoNameBox" style={fontColor}>
          {colorData.name}
        </div>
        <div id="linkContainer">
          <LinkToTop fontColor={fontColor} />
          <Refresh fontColor={fontColor} onClick={() => refresh()} />
        </div>
      </div>
    </Fragment>
  );
};

export default Demo;
