import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.js";
import SelectFile from "./components/SelectFile.js";
import ShowName from "./components/ShowName.js";


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component = {Home} exact></Route>
    <Route path="/selectfile" component = {SelectFile}></Route>
    <Route path="/showname" component={ShowName}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
