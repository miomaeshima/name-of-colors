//import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Fragment} from "react";
import "./App.css";
import Home from "./components/Home/Home.js";
import SelectFile from "./components/Selectfile/SelectFile.js";


function App() {
  return (
    // <BrowserRouter>
    // <Switch>
    // <Route path="/" component = {Home} exact></Route>
    // <Route path="/selectfile" component = {SelectFile}></Route>
    // </Switch>
    // </BrowserRouter>
    <Fragment>
      <Home/>
      <SelectFile />
    </Fragment>
  );
}

export default App;
