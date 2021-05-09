import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./styles/global.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import MemeSlider from "./component/MemeSlider";
import About from "./pages/About";
function App() {
  return (
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/slider" component={MemeSlider} />
              <Route path="/about" component={About}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
