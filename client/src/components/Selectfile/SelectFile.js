import React, { useState, Fragment } from "react";
import { getRgb } from "../utility.js";
import { LinkToTop, Refresh } from "../NavLinks/NavLinks.js";
import "./SelectFile.css";

const SelectFile = () => {
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [colorData, setColorData] = useState({});
  const [wide, setWide] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("transparent")

  const preview = (e) => {
    e.preventDefault();
    setPreviewPic(e.target.files[0]);
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

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColorData(data);
    setBackgroundColor(`rgb(${data.r}, ${data.g}, ${data.b})`)
  };

  const refresh = () => {
    setBackgroundColor("transparent");
    setColorData({});
  };

  let fontColor;
  if ((colorData.r * 299 + colorData.g * 587 + colorData.b * 114) / 1000 < 128) {
    fontColor = { color: "white" };
  } else {
    fontColor = { color: "black" };
  }

  let clickable = false;
  if (Object.keys(colorData).length === 0){
    clickable = true;
  }

  let clickableCursor = {cursor: "revert"};
  if (clickable) {
    clickableCursor = {cursor: "pointer"}
  }

  let dimension = { marginLeft: "5vw", width: "40vw", height: "auto"};
  if (wide){
    dimension = { width: "60vw", height: "auto" }
  }

  let imgStyles = {...dimension, ...clickableCursor}

  return (
    <div id="selectYourFile">
          {previewPic === null ? (
          <form name="selectFileForm">
            <label id="label" htmlFor="selectFile">
              ここをクリックして、色を調べたい画像ファイルを選んでください。
            </label>
            <input
              type="file"
              id="selectFile"
              accept="image/*"
              onChange={preview}
            ></input>
          </form>
          ) : (
            <div
              id="previewBox"
              style={{background: backgroundColor}}
            >
           <div id="previewOuterContainer">
            <div id="previewContainer">
              {clickable ? (
                <div id="instruction">
                  写真をクリックすると、この写真で一番使われている色の名前が分かります。
                </div>
              ) : (
                <div></div>
              )}
              <img
                id="chosenPic"
                style={imgStyles} 
                alt={picName}
                src={picSrc}
                onClick={getColor}                
              />
            </div>
           </div>

           <div
            id="selectNameBox"
            style={fontColor}>
              {colorData.name}                
            </div>  
        </div>
      )
      }
            <div id="linkContainer2">
              <LinkToTop fontColor={fontColor} />
              <Refresh fontColor={fontColor} onClick={() => refresh()} />
            </div>
    </div>
  );
}

export default SelectFile;
