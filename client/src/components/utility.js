import ColorThief from "colorthief";
const colorThief = new ColorThief();

//function to send rgb value to get the name of closest color from server
const getName = (rgbValue) =>{    
  try {
    fetch(`http://localhost:5000/color/${rgbValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (err) {
    console.log("error!");
  }
};

  //function to get the dominant rgb value of an image and then get the name of closest color
  //using the function above
const getRgb = (e) => {
    let result;
    let pic = e.target;
    if (pic.complete){
      result = colorThief.getColor(pic);
    }
    let rgb = {r: result[0], g: result[1], b: result[2]};
    console.log(rgb)
    let rgbToBeSent = JSON.stringify(rgb);
    
    getName(rgbToBeSent)
}


export {getRgb}