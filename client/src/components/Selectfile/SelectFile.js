import React, { Fragment, useState } from "react";
import "./SelectFile.css";
import { getRgb } from "../utility.js";

function SelectFile() {
  const [selected, setSelected] = useState(false);
  const [previewPic, setPreviewPic] = useState(null);
  const [picSrc, setPicSrc] = useState(null);
  const [picName, setPicName] = useState("");
  const [color, setColor] = useState({});
 

  const preview = (e) => {
    e.preventDefault();
    setSelected(true);
    setPreviewPic(e.target.files[0]);
  };

  if (selected) {
    let reader = new FileReader();
    reader.readAsDataURL(previewPic);

    reader.onload = function () {
   
      setPicSrc(reader.result);
      setPicName(previewPic.name);
    };
  }

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
<Fragment>
  {!selected ? 
    ( <form name="selectYourFile">  
              <label id="labelForSelectFile" htmlFor="selectFile">
                Select file
              </label>
              <input
                type="file"
                id="selectFile"
                accept="image/*"
                onChange={preview}
              ></input>
            </form>

    ):(
      <div id="selectContainer" style={{ background: `rgb(${color.r}, ${color.g}, ${color.b})`}}>
        <div id="photoContainer">
            <img id="chosenPic"
                style={{ background: "grey" }}
                alt={picName}
                src={picSrc}
                onClick={getColor}
            />
        </div>
        { Object.keys(color).length === 0 ?(
                <div> 写真をクリックすると、この写真で一番使われている色の名前が分かります。</div>
              ):(<div></div>)
        }  
        <div id="selectNameBox">{color.name}
          <div id="linkContainer">
              <a href="#" id="returnButton"></a>
          </div>
        </div>
      </div>
    )}
  </Fragment>
  );
};

export default SelectFile;
