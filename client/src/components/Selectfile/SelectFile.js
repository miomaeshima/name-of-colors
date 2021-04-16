import React, { useState } from "react";
import "./SelectFile.css";
import { getRgb} from "../utility.js";

function SelectFile() {
  const [unselected, setUnselected] = useState(true);
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [color, setColor] = useState({});

  const preview = (e) => {
    e.preventDefault();
    setUnselected(false);
    setPreviewPic(e.target.files[0]);
  };

  if (unselected === false) {
    let reader = new FileReader();
    reader.readAsDataURL(previewPic);

    reader.onload = function () {
      setPicSrc(reader.result);
      setPicName(previewPic.name);
    };
  }

  const getColor = async (e) => {    
  let data = await getRgb(e);
  setColor(data)
  }  
    
  return (
    <div>
    <a name="selectyourfile">
      {unselected ? (
        <form>
          <label id="labelforselectfile" htmlFor="selectfile">
            Select file
          </label>
          <input
            type="file"
            id="selectfile"
            accept="image/*"
            onChange={preview}
          ></input>
        </form>
      ) : (
        <div id="previewContainer">
          <img
            id="chosenPic"
            style={{ background: "grey" }}
            alt={picName}
            src={picSrc}
             onClick={getColor}
          />
          <div id="colorContainer" style={{background:`rgb(${color.r}, ${color.g}, ${color.b})`}}>{color.name}</div>
        </div>
      )}
      </a>
    </div>
  );
}

export default SelectFile;
