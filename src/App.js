import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import { Search } from '@material-ui/icons';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
