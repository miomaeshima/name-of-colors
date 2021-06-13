import React, { useState, Fragment } from "react";
import beigestones from "../images/beigestones.jpg";
import { getRgb } from "../utility.js";
import { LinkToTop, Refresh, Next } from "../NavLinks/NavLinks.js";
import "./Demo.css";

const Demo = () => {
  const [colorData, setColorData] = useState({});
  const [demoColor, setDemoColor] = useState("lightgoldenrodyellow");

  const placeDemoPage = () => {
    window.location.href = "#demoImage";
  };

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColorData(data);
    setDemoColor(`rgb(${data.r}, ${data.g}, ${data.b})`);

    placeDemoPage();
  };

  const refresh = () => {
    setDemoColor("lightgoldenrodyellow");
    setColorData({});
  };

  let fontColor;
  if (
    (colorData.r * 299 + colorData.g * 587 + colorData.b * 114) / 1000 <
    128
  ) {
    fontColor = { color: "white" };
  } else {
    fontColor = { color: "black" };
  }

  let clickable = false;
  if (Object.keys(colorData).length === 0) {
    clickable = true;
  }

  return (
    <Fragment>
      <div id="demoContainer" style={{ background: demoColor }}>
        <div id="photoContainer">
          <img
            id="demoImage"
            alt="beige stone pebbles"
            onClick={getColor}
            src={beigestones}
            style={clickable ? { cursor: "pointer" } : { cursor: "revert" }}
            tabIndex="0"
          />

          {clickable ? (
            <div id="demoText">
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
          <Next fontColor={fontColor} />
        </div>
      </div>
    </Fragment>
  );
};

export default Demo;
