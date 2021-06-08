import { useState, Fragment } from "react";
import beigestones from "../images/beigestones.jpg";
import { getRgb, getRgbOfImg } from "../utility.js";
import { ChevronsUp, RefreshCw } from "react-feather";
import "./Demo.css";

const Demo = () => {
  const [color, setColor] = useState({});

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColor(data);
  };

  const getDemoColor = async (e) => {
    let realTarget = e.target.previousElementSibling;
    let data = await getRgbOfImg(realTarget);
    setColor(data);
  };

  return (
    <Fragment>
      <div
        id="demoContainer"
        style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      >
        <div id="photoContainer">
          <img
            id="demoImage"
            alt="beige stone pebbles"
            onClick={getColor}
            src={beigestones}
          />
          {Object.keys(color).length === 0 ? (
            <div id="demoText" onClick={getDemoColor}>
              写真をクリックすると、この写真で一番使われている色の名前が分かります。
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div
          id="demoNameBox"
          style={
            (color.r * 299 + color.g * 587 + color.b * 114) / 1000 < 128
              ? { color: "white" }
              : { color: "black" }
          }
        >

          {color.name}
          <div id="linkContainer">
            <a href="#top" className="returnButton"></a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Demo;
