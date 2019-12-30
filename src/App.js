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

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            {/*<Route path='/contact'>
              <Contact />
            </Route>*/}
            <Route exact path="/zernike">
              <Zernike />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
