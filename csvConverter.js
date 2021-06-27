const fastcsv = require('fast-csv');
const fs = require('fs');

//japanese-color-namesというCSVファイルを読み込み、array of objectsに変換して、japanese-color-names.jsを作成する。再度この処理をしたいときは、ターミナルで、node.csvConverter.jsと入力。

let stream = fs.createReadStream('japanese-color-names.csv');
let csvData = [];
let csvStream = fastcsv
    .parse()
    //.on("data"～は一行入ってくるたびに、という意味。一行入ってくるたびにpushする。
    .on('data', function (data) {
        let object = {
            name: data[0],
            r: Number.parseInt(data[1]),
            g: Number.parseInt(data[2]),
            b: Number.parseInt(data[3]),
        };
        csvData.push(object);
    })
    //.on("end"～で、endというのは各行の処理が終わってしまったら、という意味。そうしたらdbとつないで処理する。
    .on('end', function () {
        fs.writeFile(
            './japanese-color-names.js',
            JSON.stringify(csvData),
            function (err) {
                if (err) throw err;
                console.log('done!');
            }
        );
    });

stream.pipe(csvStream);

let stream = fs.createReadStream('sample-color-names.csv');
let csvData = [];
let csvStream = fastcsv
    .parse()
    //.on("data"～は一行入ってくるたびに、という意味。一行入ってくるたびにpushする。
    .on('data', function (data) {
        let object = {
            name: data[0],
            r: Number.parseInt(data[1]),
            g: Number.parseInt(data[2]),
            b: Number.parseInt(data[3]),
        };
        csvData.push(object);
    })
    //.on("end"～で、endというのは各行の処理が終わってしまったら、という意味。そうしたらdbとつないで処理する。
    .on('end', function () {
        fs.writeFile(
            './sample-color-names.js',
            JSON.stringify(csvData),
            function (err) {
                if (err) throw err;
                console.log('done!');
            }
        );
    });

stream.pipe(csvStream);
