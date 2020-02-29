import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './App';
import About from './About';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
