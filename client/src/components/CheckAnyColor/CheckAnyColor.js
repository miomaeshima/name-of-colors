import React, { useState, useEffect } from "react";
import { getRgb } from "../utility.js";
import { LinkToTop, Refresh } from "../NavLinks/NavLinks.js";
import "./CheckAnyColor.css";

const CheckAnyColor = () => {
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  // const [picName, setPicName] = useState("");
  const [colorData, setColorData] = useState({});
  // const [wide, setWide] = useState(true);
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
      image.src = reader.result;
    };
  }

  useEffect(()=> {
    if(picSrc !== null){
    let canvas = document.getElementById("canvas");    
    let canvasContainer = document.getElementById("canvasContainer");
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;

    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "gray";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let img = new Image();
    img.src = picSrc;
    img.onload = function () {
      if (img.width>=img.height) {
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
          img.width * (canvas.height / img.height),
          canvas.height
        );
      }
    };
    let rgb = document.getElementById("rgb");

    canvas.addEventListener("mousemove", (event) => {
      let x = event.offsetX;
      let y = event.offsetY;
      let imageData = context.getImageData(x, y, 1, 1);
      let data = imageData.data;
      rgb.innerHTML = `${data[0]}, ${data[1]}, ${data[2]}`;
      rgb.style.background = `rgb(${data[0]}, ${data[1]}, ${data[2]}`;
    });

    canvas.addEventListener("click", (event) => {
      let x = event.offsetX;
      let y = event.offsetY;
      let imageData = context.getImageData(x, y, 1, 1);
      let data = imageData.data;
      console.log(data);
    });

 
  }
  },[picSrc])

  const refresh = () => {
    setPreviewPic(null);
    setBackgroundColor("transparent");
    setPicSrc(null);
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



  return (
    <div id="checkAnyColor">
      {previewPic === null ? (
        <form name="selectFileForm">
          <label className="label" htmlFor="selectFileAnyColor" tabIndex="0">
            ここをクリックして、画像を選んでください。
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
              <div id="canvasContainer">
              <canvas id="canvas"></canvas>
              </div>
              <div id="rgb"></div>
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
