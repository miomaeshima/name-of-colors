import ColorThief from "colorthief";
const colorThief = new ColorThief();

const getName = async (rgbValue) =>{
  let res =  await fetch(`/color/${rgbValue}`)
  const color = await res.json();
  return color
}
 //function to get the dominant rgb value of an image and then get the name of closest color
  //using the function above

const getRgb = async (e) => {
    let pic = e.target;
    if (pic.complete){
    let result = colorThief.getColor(pic);
    
    let rgb = {r: result[0], g: result[1], b: result[2]};
    let rgbToBeSent = JSON.stringify(rgb);    
    let color = await getName(rgbToBeSent);
    return color
  }
  }

export {getRgb}