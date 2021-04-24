import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./styles/global.css"

import Home from "./pages/Home";
import Header from "./component/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
