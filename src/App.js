import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import StationList from './components/stationList'
import StationDetails from './components/stationDetails'
import AddStation from './components/addStation'
import About from './components/about'


function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/station-list">List of Stations</Link></li>
            <li><Link to="/add-station">Add a station!</Link></li>
            <li><Link to="/about">About this site</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/station-list" element={<StationList />}></Route>
          <Route path="/add-station" element={<AddStation />}></Route>
          <Route path="/station/:id" element={<StationDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;