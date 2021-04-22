//import {Link} from "react-router-dom";
import "./Home.css";
// import stones from "../images/stones.jpg";
import {getRgb} from "../utility.js"
// import ColorThief from "colorthief";
// const colorThief = new ColorThief();

function Home() {

  return (
    <div id="container">
      <div id="intro">
        <div id="title">色の名前</div>
        <div id="description">
        
        例えば、色の名前を知りたい。青でもなく空色でもなく、「白藍　しらあい」という名前が知りたい、というときに使ってください。<br/><br/>

        最終的には画像内の好きな箇所の色が選べるようになりますが、このバージョンでは、選んだ画像で一番使われている色の名前が分かります。<br/><br/>

        画像を選んでも、ネット上で送られるのは一番使われている色のRGB値だけ。画像自体はどこにも送られません。<br/><br/>
        <div id="clickContainer"><div id="selectYourFile"><a href="#selectyourfile" class="button" id="button1">自分のデバイス内の画像を調べる。</a> 
        {/* <Link to="/selectfile">アップロードページ</Link>をクリックしてください。 */}
        </div>
        <div id="demo"><a href="#sampleImage" class="button">デモを見る。</a>
        </div></div>              
        </div>
      </div>
      {/* <div id="photoContainer">
      <img className="sampleimage" alt="beige stone pebbles" onClick={getRgb} src={stones}/>
      <div id="demoText">写真をクリックすると、この写真で一番使われている色の名前が分かります。</div>      
      </div> */}
      
    </div>
  );
}

export default Home;
