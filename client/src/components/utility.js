import ColorThief from 'colorthief';
const colorThief = new ColorThief();

const getName = async (rgbValue) => {
    let res = await fetch(`/color/${rgbValue}`);
    const color = await res.json();
    return color;
};
//function to get the dominant rgb value of an image and then get the name of closest color
//using the function above

const getMainRgb = async (e) => {
    let pic = e.target;
    if (pic.complete) {
        let result = colorThief.getColor(pic);

        let rgb = { r: result[0], g: result[1], b: result[2] };
        let rgbToBeSent = JSON.stringify(rgb);
        let color = await getName(rgbToBeSent);
        return color;
    }
};

// const getMainRgbOfImg = async (element) => {
//   if (element.complete) {
//     let result = colorThief.getColor(element);

//     let rgb = { r: result[0], g: result[1], b: result[2] };
//     let rgbToBeSent = JSON.stringify(rgb);
//     let color = await getName(rgbToBeSent);
//     return color;
//   }
// };

const getRgb = async (data) => {
    let rgb = { r: data[0], g: data[1], b: data[2] };
    let rgbToBeSent = JSON.stringify(rgb);
    let color = await getName(rgbToBeSent);
    return color;
};

export { getMainRgb, getRgb };
