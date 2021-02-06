import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tuts from "./screens/Tuts";
import Choose_Your_Game_Engine from "./screens/tuts/Choose-Your-Game-Engine";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/tuts" exact>
        <Tuts />
      </Route>
      <Route path="/tuts/choose-your-game-engine">
        <Choose_Your_Game_Engine />
      </Route>
    </Router>
  );
}

export default App;
