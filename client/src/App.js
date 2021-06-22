import { Fragment } from "react";
import "./App.css";
import Home from "./components/Home/Home.js";
import Demo from "./components/Demo/Demo.js";
import SelectFile from "./components/Selectfile/SelectFile.js";
import CheckAnyColor from "./components/CheckAnyColor/CheckAnyColor.js";


function App() {
  return (
    <Fragment>
      <Home />
      <Demo />
      <SelectFile />
      <CheckAnyColor />    
    </Fragment>
  );
}

export default App;
