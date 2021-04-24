import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./styles/global.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import MemeExtended from "./component/MemeExtended";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/meme/:id" component={MemeExtended}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
