import ColorThief from "colorthief";
const colorThief = new ColorThief();

//function to send rgb value to get the name of closest color from server

// const getName = (rgbValue) =>{    
//   try {
//     fetch(`http://localhost:5000/color/${rgbValue}`)
//       .then((res) => res.json())
//       .then((color)=>{
//         console.log(color)
//         return 100
//       })
//     } catch (err) {
//     console.log("getName is not working!");
//   }
// };

const getName = async (rgbValue) =>{
  let res =  await fetch(`http://localhost:5000/color/${rgbValue}`)
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
    
    // const promise = getName(rgbToBeSent);
    // promise
    // .then ((color)=>{
    //   return color
    // }
    // )
    //   .catch((e)=>console.error(e));
    //   } else {
    //   console.log("pic is not completed yet")

    let color = await getName(rgbToBeSent);
    return color
  }
  }

export {getRgb}