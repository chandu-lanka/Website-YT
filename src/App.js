import './App.css';
import Home from "./screens/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tuts from './screens/Tuts';

function App() {
  return (
    <Router>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/tuts">
        <Tuts />
      </Route>
    </Router>
  );
}

export default App;
