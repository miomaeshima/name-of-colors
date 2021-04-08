import {Link} from "react-router-dom";
import "./Home.css";
import stones from "../images/stones.jpg";
import ColorThief from "colorthief";
const colorThief = new ColorThief();

function Home() {

  //function to send rgb value to get the name of closest color from server
const getName = (rgbValue) =>{    
  try {
    fetch(`http://localhost:5000/color/${rgbValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (err) {
    console.log("error!");
  }
};

  //function to get the dominant rgb value of an image and then get the name of closest color
  //using the function above
  let getRgb = (e) => {
    let result;
    let pic = e.target;
    if (pic.complete){
      result = colorThief.getColor(pic);
    }
    let rgb = {r: result[0], g: result[1], b: result[2]};
    console.log(rgb)
    let rgbToBeSent = JSON.stringify(rgb);
    
    getName(rgbToBeSent)
  }

  return (
    <div id="container">
      <div>
        <div id="title">色の名前</div>
        <div id="intro">
          
          ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。ご自身のデバイスの中の画像を選ぶには<Link to="/selectfile">アップロードページ</Link>をクリックしてください。
          
          
        </div>
        <div id="photoContainer"><img className="sampleimage" alt="beige stone pebbles" onClick={getRgb} src={stones}/></div>
      </div>
    </div>
  );
}

export default Home;
