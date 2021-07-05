import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from "react-router-dom";
import Stream from "./Stream";
import Radio from "./Radio";


function App() {
  return (
    <div>
      <Link to="/stream">Stream</Link>
      <br />
      <Link to="/radio">Radio</Link>
      <Switch>
        <Route path="/stream" exact component={Stream}>
          <Stream />
        </Route>
        <Route path="/radio" exact component={Radio}>
          <Radio />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
