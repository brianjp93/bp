import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"

import Home from './components/general/home'
import Zernike from './components/projects/zernike'
import NavBar from './components/general/navbar'
import About from './components/general/about'
import Aoc2018 from './components/projects/aoc2018/general.jsx'
import Hilbert from './components/projects/hilbert/hilbert.jsx'
import Keyboard from './components/projects/keyboard';

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/hilbert" element={<Hilbert />} />
            <Route path="/aoc2018" element={<Aoc2018 />} />
            <Route path="/zernike" element={<Zernike />} />
            <Route path='/about' element={<About />} />
            <Route path='/keyboard' element={<Keyboard />} />
            <Route path="/" element={<Home />} />
          </Routes>

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
