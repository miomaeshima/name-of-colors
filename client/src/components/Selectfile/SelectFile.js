import React, {useState } from "react";
import "./SelectFile.css";
import { getRgb } from "../utility.js";

function SelectFile() {
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [color, setColor] = useState({});
  const [wide, setWide] = useState(true);

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
    setColor(data); 
   };

  return (
    <div id="selectYourFile">
      {(previewPic === null) ? (
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
        <div id="previewBox" style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
        >
            <div
              id="previewOuterContainer"
             
            >
               <div id="previewContainer">
                  {Object.keys(color).length === 0 ? 
                    (
                    <div id="instruction">写真をクリックすると、この写真で一番使われている色の名前が分かります。</div>
                    ) : (
                    <div></div>
                    )
                  }
                  <img
                    id="chosenPic"
                    style={wide? {width: '60vw', height:'auto'}:{marginLeft: '5vw', width:'40vw', height:'auto'}}
                    alt={picName}
                    src={picSrc}
                    onClick={getColor}
                  />
               </div>               
            </div>
        
            <div id="selectNameBox" style={((color.r * 299 + color.g * 587 + color.b * 114) / 1000 < 128)? {color:'white'}:{color:'black'}}>
                {color.name}
              <div id="linkContainer">
                  <a href="#home" className="returnButton" ></a>
              </div>
            </div>
        </div>
        )}         
    </div>
  );
}

export default SelectFile;
