import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


ReactDOM.render(
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
            <Route path="/about"><h1>ABOUT</h1></Route>
            <Route path="/"><h1>HOME</h1></Route>
        </Switch>
    </Router>,
    document.getElementById('app')
);
