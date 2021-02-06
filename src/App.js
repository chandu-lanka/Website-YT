import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tuts from "./screens/Tuts";
import Choose_Your_Game_Engine from "./screens/tuts/Choose-Your-Game-Engine";
import Godot_ui from "./screens/tuts/Godot-ui";
import GodotCourse from "./screens/tuts/GodotCourse";
import Devlogs from "./screens/Devlogs";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/tuts" exact>
        <Tuts />
      </Route>
      <Route path="/devlogs">
        <Devlogs />
      </Route>
      <Route path="/tuts/choose-your-game-engine">
        <Choose_Your_Game_Engine />
      </Route>
      <Route path="/tuts/godot-ui-tut">
        <Godot_ui />
      </Route>
      <Route path="/tuts/godot-course">
        <GodotCourse />
      </Route>
    </Router>
  );
}

export default App;
