//import {Link} from "react-router-dom";
import "./Home.css";
// import stones from "../images/stones.jpg";
import {getRgb} from "../utility.js"
// import ColorThief from "colorthief";
// const colorThief = new ColorThief();

function Home() {

  // const demoImage = document.getElementById("sampleImage")
  // const scrollToDemo = (e) =>{
  //   e.preventDefault();
  //   console.log(demoImage);
  //   demoImage.scrollIntoView({behavior: "smooth"});
  // }

  return (
    <div id="container">
      <div id="intro">
        <div id="title">色の名前</div>
        <div id="description">
        
        例えば、青でもなく空色でもなく「白藍 しらあい」という、日本の伝統色の名前が知りたいときが分かります。<br/><br/>

        最終的には画像内の好きな箇所の色が選べるようになりますが、このバージョンでは、選んだ画像で一番使われている色の名前を調べます。<br/><br/>

        画像を選んでも、ネット上で送られるのは一番使われている色のRGB値だけ。画像自体はどこにも送られません。<br/><br/>
        <div id="clickContainer"><div id="selectYourFile"><a href="#selectyourfile" className="button" id="button1">自分のデバイス内の画像を調べる。</a> 
        {/* <Link to="/selectfile">アップロードページ</Link>をクリックしてください。 */}
        </div>
        <div id="demo"><a href="#sampleImage" className="button">デモを見る。</a>
        </div></div>              
        </div>
      </div>
      
    </div>
  );
}

export default Home;
