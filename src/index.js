import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
  import routes from './constants/routes'
  import SideBar from "./components/SideBar"


ReactDOM.render(
    <div className="container is-fluid">
        <Router>
            <div className="columns">
                <div className="column is-3">
                    <SideBar />
                </div>
                <div className="column">
                    <Switch>
                        <Route path={routes.stats}>
                            <h1>Stats</h1>
                        </Route>
                        <Route path={routes.drafts}>
                            <h1>Drafts</h1>
                        </Route>
                        <Route path={routes.home}>
                            <h1>Home</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>,
    document.getElementById('app')
)
