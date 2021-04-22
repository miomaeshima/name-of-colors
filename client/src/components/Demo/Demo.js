import { useState, Fragment } from "react";
import stones from "../images/stones.jpg";
import { getRgb, getRgbOfImg } from "../utility.js";
import "./Demo.css";

const Demo = () => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState({});

  const getColor = async (e) => {
    // e.preventDefault();
    setClicked(true);

    let data = await getRgb(e);
    setColor(data);
  };

  const getDemoColor = async (e) => {
    let realTarget = e.target.previousElementSibling;
    setClicked(true);
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
            id="sampleImage"
            alt="beige stone pebbles"
            onClick={getColor}
            src={stones}
          />
          {!clicked ? (
            <div id="demoText" onClick={getDemoColor}>
              写真をクリックすると、この写真で一番使われている色の名前が分かります。
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div id="demoNameBox">{color.name}</div>
      </div>
    </Fragment>
  );
};

export default Demo;
