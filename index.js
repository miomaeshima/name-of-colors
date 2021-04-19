const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require ("cors");
const path = require("path");
const japaneseColorNames = require("./japanese-color-names.js")
//↓ for development
//const sampleColorNames = require("./sample-color-names.js"); 

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")));
}


//function to make an array of objects {name, r, g, b} into objects {name, distance}
const getDistance = (array, re, gr, bl) => array.map(color=>{
    let distance = Math.sqrt((color.r-re)**2 + (color.g-gr)**2 + (color.b-bl)**2);
    return {...color, distance: distance}
})

//function to return color that has smallest distance 
const findClosest = (colors)=>{
 let result = colors[0];
 for (let i=1; i<colors.length; i++){    
     if(colors[i].distance < result.distance){
         result = colors[i]
     }}
 return result;
}

app.get("/color/:rgb", (req, res)=>{
    let value = req.params.rgb;
    value = JSON.parse(value);    
 
   let arrayOfDistance = getDistance(japaneseColorNames, value.r, value.g, value.b) 
   console.log(arrayOfDistance.length)

    let chosenColor = findClosest(arrayOfDistance);
    console.log(chosenColor)

   res.send(JSON.stringify(chosenColor))
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})

app.listen(PORT, ()=>{
    console.log(`Server is starting on port ${PORT}`)
})

