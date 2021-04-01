const fastcsv = require("fast-csv");
const fs = require("fs");
const Pool = require("pg").Pool;
require("dotenv").config();

let stream = fs.createReadStream("japanese-color-names.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    csvData.push(data);
  })
  .on("end", function () {
    const pool = new Pool({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    });

    const query =
      "INSERT INTO japanese_color_names (name, r, g, b) VALUES ($1, $2, $3, $4)";

    pool.connect((err, client, done) => {
      if (err) {
        return console.error("Error acquiring client", err.stack);
      }
      try {
        csvData.forEach((row) => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted" + res.rowCount + "row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);
