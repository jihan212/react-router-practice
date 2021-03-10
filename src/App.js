import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/team/:id">
            <TeamDetail></TeamDetail>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
