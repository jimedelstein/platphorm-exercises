import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Exercise2Manager from './exercise-02/Exercise2Manager';
import Exercise1Manager from './exercise-01/Exercise1Manager';
import Exercise3Manager from './exercise-03/Exercise3Manager';

function App() {
  return (
    <Router>
      <main className="container-fluid">
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li>
                <NavLink
                  activeClassName="active"
                  to="/exercise-01"
                  className="nav-link"
                  exact
                >
                  Exercise 1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/exercise-02" className="nav-link">
                  Exercise 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/exercise-03" className="nav-link">
                  Exercise 3
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row pl-1">
          <div className="col">
            <Switch>
              <Route path="/exercise-01">
                <Exercise1Manager />
              </Route>
              <Route path="/exercise-02">
                <Exercise2Manager />
              </Route>
              <Route path="/exercise-03">
                <Exercise3Manager />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
