import React from 'react';
import Home from './Pages/Home';
import Saved from './Pages/Saved';
import {Link, BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Saved" component={Saved}></Route>
      </div>
    </Router>
  );
}

export default App;
