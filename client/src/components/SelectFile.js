import React, {useState} from "react";
import "./SelectFile.css";

function SelectFile() {
 const [unselected, setUnselected] = useState(true);

  const preview = (e) => {
      e.preventDefault();
    console.log(e.target.files[0]);
    setUnselected(false);
  };

  return (
    <div>
      {unselected ? (
        <div>
          <label id="labelforselectfile" htmlFor="selectfile">
            Select file
          </label>
          <input
            type="file"
            id="selectfile"
            accept="image/*"
            onChange={preview}
          ></input>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SelectFile;
