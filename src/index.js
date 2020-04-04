import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import SideBar from "./components/SideBar"


ReactDOM.render(
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
            <Route path="/about"><h1>ABOUT</h1></Route>
            <Route path="/"><SideBar /></Route>
        </Switch>
    </Router>,
    document.getElementById('app')
)
