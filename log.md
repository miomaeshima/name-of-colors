データをパラムに格納して送る方法(getの場合)

| client側                         | server側                                                                                                                                    |     | 
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --- | 
| variableという変数を送るよ。<br> fetch(` (url) /xxx/${variable}`) | 来たよー！:dataのところにパラムとして入ってる。↓  <br>app.get("/xxx/:data, (res, req)=>{                                                                                            |     | 
|                                  | let value = JSON.parse(req.params)<br>で:dataの場所に込められた変数を非json化する<br>console.log(value)　例えばだがそれをコンソールにだす。 |     | 
|                                  | で、色々処理して今度はデータをserver側に返すんだけど、まず、json化するよ。<br>res.send(JSON.stringify(データ）)<br>                         |     | 
|なんか帰ってきた！今度は非json化して読めるようにしよう。<br>.then(res=>res.json()) 
でもって、例えばコンソールログしよう。<br>.then(data =>{            console.log(data)       }) |                          |     | 
