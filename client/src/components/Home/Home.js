import './Home.css';

function Home() {
    return (
        <div id="home">
            <div className="wrapper">
                <div id="title">色の名前</div>
            </div>
            <div className="wrapper">
                <div>
                    <p id="intro">
                        例えば、青でもなく空色でもなく「白藍
                        しらあい」という、日本の伝統色の名前が知りたいとき使えます。
                        画像を選んでも、ネット上で送られるのは一番使われている色のRGB値だけ。画像自体はどこにも送られません。
                        現時点ではPC・Macのみ対応していますが、スマホ対応も鋭意進行中です。
                        <br />
                        <br />
                        【New!】画像のメインカラーに加えて、画像内の好きな箇所の色が選べるようになりました。
                    </p>
                </div>
                <div id="clickContainer">
                    <a href="#demoImage" className="link">
                        メインカラーを調べるデモを見る。
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
