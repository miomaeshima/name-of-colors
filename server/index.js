const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require ("cors");
const path = require("path");
const japaneseColorNames = require("./japanese-color-names.js")

app.use(cors());
app.use(express.json());

app.get("/color/:rgb", (req, res)=>{
    console.log(req.params.rgb);
    res.send("hello")
})


app.listen(PORT, ()=>{
    console.log(`Server is starting on port ${PORT}`)
})

