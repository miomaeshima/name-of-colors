//import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import Home from "./components/Home/Home.js";
import Demo from "./components/Demo/Demo.js";
import SelectFile from "./components/Selectfile/SelectFile.js";

function App() {
  return (
    <Fragment>
      <Home />
      <Demo />
      <SelectFile />
    </Fragment>
  );
}

export default App;
