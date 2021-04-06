function Button() {
  let rgb = { r: 225, g: 169, b: 171 };
  let myRgb = JSON.stringify(rgb);
  const sendRgb = (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:5000/color/${myRgb}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log("error!");
    }
  };
  return (
    <div>
      <button onClick={sendRgb}>send</button>
    </div>
  );
}

export default Button;
