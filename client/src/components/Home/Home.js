import "./Home.css";

function Home() {
  return (
    <div id="home">
      <div className="wrapper">
        <div id="title">色の名前</div>
      </div>
      <div className="wrapper">
        <div id="intro">
          例えば、青でもなく空色でもなく「白藍
          しらあい」という、日本の伝統色の名前が知りたいとき使えます。
          最終的には画像内の好きな箇所の色が選べることを目指しますが、このバージョンでは、選んだ画像で一番使われている色の名前を調べます。
          画像を選んでも、ネット上で送られるのは一番使われている色のRGB値だけ。画像自体はどこにも送られません。
        </div>
        <div id="clickContainer">
          <a href="#demoImage" className="link">
            デモを見る。
          </a>
          <a href="#selectYourFile" className="link" id="button1">
            自分の画像のメインカラーを調べる。
          </a>
          <a href="#checkAnyColor" className="link" id="button2">
            自分の画像中の好きな色を調べる。
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
