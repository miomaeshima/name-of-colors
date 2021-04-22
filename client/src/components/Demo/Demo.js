import {Fragment} from "react";
import stones from "../images/stones.jpg";
import {getRgb} from "../utility.js";
import "./Demo.css";


function Demo (){
    return (
    <Fragment>
    <div id="photoContainer">
      <img id="sampleImage" alt="beige stone pebbles" onClick={getRgb} src={stones}/>
      <div id="demoText">写真をクリックすると、この写真で一番使われている色の名前が分かります。</div>      
      </div>
    </Fragment>
    )
}

export default Demo;