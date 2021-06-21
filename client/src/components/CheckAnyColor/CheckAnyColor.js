import React, { useState } from "react";
import { getRgb } from "../utility.js";
import { LinkToTop, Refresh } from "../NavLinks/NavLinks.js";
import "./CheckAnyColor.css";

const CheckAnyColor = () => {
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [colorData, setColorData] = useState({});
  const [wide, setWide] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const placeCheckAnyColorPage = () => {
    window.location.href = "#checkAnyColor";
  };

  const preview = (e) => {
    e.preventDefault();
    setPreviewPic(e.target.files[0]);
    placeCheckAnyColorPage();
  };

  if (previewPic !== null) {
    let reader = new FileReader();
    reader.readAsDataURL(previewPic);
    let image = new Image();
    reader.onload = function () {
      setPicSrc(reader.result);
      setPicName(previewPic.name);
      image.src = reader.result;
      image.onload = function () {
        if (image.width < image.height) {
          setWide(false);
        }
      };
    };
  }

  if (picSrc !== null) {
    let canvas = document.getElementById("canvas");
    canvas.width = 400;
    canvas.height = 400;

    let context = canvas.getContext("2d");
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let img = new Image();
    img.src = picSrc;
    img.onload = function () {
      if (wide) {
        context.drawImage(
          img,
          0,
          0,
          canvas.width,
          img.height * (canvas.width / img.width)
        );
      } else {
        context.drawImage(
          img,
          0,
          0,
          img.width * (canvas.height/img.height),
          canvas.height
        );
      }
    };
  }

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColorData(data);
    setBackgroundColor(`rgb(${data.r}, ${data.g}, ${data.b})`);

    placeCheckAnyColorPage();
  };

  const refresh = () => {
    setPreviewPic(null);
    setBackgroundColor("transparent");
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

  let dimension = { marginLeft: "5vw", width: "40vw", height: "auto" };
  if (wide) {
    dimension = { width: "60vw", height: "auto" };
  }

  let imgStyles = { ...dimension };

  return (
    <div id="checkAnyColor">
      {previewPic === null ? (
        <form name="selectFileForm">
          <label className="label" htmlFor="selectFileAnyColor" tabIndex="0">
            ここをクリックして、色を調べたい画像ファイルを選んでください。
          </label>
          <input
            type="file"
            id="selectFileAnyColor"
            accept="image/*"
            onChange={preview}
          ></input>
        </form>
      ) : (
        <div className="previewBox" style={{ background: backgroundColor }}>
          <div className="previewOuterContainer">
            <div className="previewContainer" id="canvasContainer">
              <div className="instruction">
                クリックしたところの色の名前が分かります。
              </div>
              <canvas id="canvas"></canvas>

              {/* <img
                id="chosenPic"
                style={imgStyles}
                alt={picName}
                src={picSrc}
                onClick={getColor}
                tabIndex="0" 
              /> */}
            </div>
          </div>

          <div id="selectNameBox" style={fontColor}>
            {colorData.name}
          </div>
        </div>
      )}
      <div id="linkContainer3">
        <LinkToTop fontColor={fontColor} />
        <Refresh fontColor={fontColor} onClick={() => refresh()} />
      </div>
    </div>
  );
};

export default CheckAnyColor;
