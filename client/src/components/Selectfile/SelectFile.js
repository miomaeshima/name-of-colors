import React, {useState } from "react";
import "./SelectFile.css";
import { getRgb } from "../utility.js";

function SelectFile() {
 // const [selected, setSelected] = useState(false);
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [color, setColor] = useState({});
  const [wide, setWide] = useState(true)

  const preview = (e) => {
    e.preventDefault();
  //  setSelected(true);
    setPreviewPic(e.target.files[0]);
  };

 // if (selected) {
  if(previewPic !== null){  
  let reader = new FileReader();   
    reader.readAsDataURL(previewPic);
  let image = new Image();
    reader.onload = function () {
      setPicSrc(reader.result);
      setPicName(previewPic.name);
      image.src = reader.result;
      image.onload = function(){
        if (image.width<image.height){
          setWide(false);
        }
      }      
    }   
    }

  console.log(wide)

  const getColor = async (e) => {
    let data = await getRgb(e);
    setColor(data);
  };

  //   return (
  //     <Fragment>
  //       <div
  //         id="selectContainer"
  //         style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
  //       >
  //         <a name="selectYourFile">
  //           {!selected ? (
  //             <form>
  //               <label id="labelForSelectFile" htmlFor="selectFile">
  //                 Select file
  //               </label>
  //               <input
  //                 type="file"
  //                 id="selectFile"
  //                 accept="image/*"
  //                 onChange={preview}
  //               ></input>
  //             </form>
  //           ) : (
  //             <div id="previewContainer">
  //               <img
  //                 id="chosenPic"
  //                 style={{ background: "grey" }}
  //                 alt={picName}
  //                 src={picSrc}
  //                 onClick={getColor}
  //               />
  //               <div
  //                 id="colorContainer"
  //                 style={{
  //                   background: `rgb(${color.r}, ${color.g}, ${color.b})`,
  //                 }}
  //               >
  //                 {color.name}
  //               </div>
  //             </div>
  //           )}
  //         </a>
  //       </div>
  //     </Fragment>
  //   );
  // })

  return (
    
    <div id="selectYourFile">
     {/* // {!selected ? ( */}
        {(previewPic === null) ? (
          <form name="selectYourFile" id="formToSelectFile">
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
          id="selectContainer"
          style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})` }}
        >
          <div id="previewContainer">
            <img
              id="chosenPic"
              style={{ background: "grey" }}
              alt={picName}
              src={picSrc}
              onClick={getColor}
            />
          </div>
          {Object.keys(color).length === 0 ? (
            <div>
              
              写真をクリックすると、この写真で一番使われている色の名前が分かります。
            </div>
          ) : (
            <div></div>
          )}
          <div id="selectNameBox">
            {color.name}
            <div id="linkContainer">
              <a href="#home" className="returnButton">Go back to top</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectFile;
