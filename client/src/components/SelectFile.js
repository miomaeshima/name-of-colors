import React, { useState } from "react";
import "./SelectFile.css";

function SelectFile() {
  const [unselected, setUnselected] = useState(true);
  const [previewPic, setPreviewPic] = useState(null);

  const preview = (e) => {
    e.preventDefault();
    setUnselected(false);
    setPreviewPic(e.target.files[0]);
  };

  console.log(previewPic);
  if (unselected === false) {
    console.log("false");
    let hi2 = document.getElementById("hi2")
    
    console.log(hi2)
  }

  return (
    <div>
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
        <div id="hi2"></div>
      )}
    </div>
  );
}

export default SelectFile;
