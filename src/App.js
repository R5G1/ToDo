
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navibar from './menu/navibar';
import Home from './page-home/Home';
import DataTable from './page-todo/data';

function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route exact path="/Home"  component={Home} />
        <Route path="/todo" component={DataTable} />
      </Switch>
    </Router>
  );
}

export default App;
