//import {Link} from "react-router-dom";
import "./Home.css";
import stones from "../images/stones.jpg";
import {getRgb} from "../utility.js"
// import ColorThief from "colorthief";
// const colorThief = new ColorThief();

function Home() {

  return (
    <div id="container">
      <div id="intro">
        <div id="title">色の名前</div>
        <div id="description">
          ロレム・イプサムの嘆き、トマト大好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。ご自身のデバイスの中の画像を選ぶには<a href="#selectyourfile">アップロードページ</a>をクリックしてください。
          {/* <Link to="/selectfile">アップロードページ</Link>をクリックしてください。 */}
        </div>
      </div>
      <div id="photoContainer"><img className="sampleimage" alt="beige stone pebbles" onClick={getRgb} src={stones}/></div>
    </div>
  );
}

export default Home;
