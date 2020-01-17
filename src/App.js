import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom"

import Home from './components/general/home'
import Zernike from './components/projects/zernike'
import NavBar from './components/general/navbar'
import About from './components/general/about'
import Aoc2018 from './components/projects/aoc2018/general.jsx'

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/aoc2018">
              <Aoc2018 />
            </Route>
            <Route exact path="/zernike">
              <Zernike />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <div style={{paddingLeft: 15, color: 'grey'}}>
            <div>
              I'm cool, you're a nerd, nerd.
            </div>

            <div style={{height: 20}}></div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
