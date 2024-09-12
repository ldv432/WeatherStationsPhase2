import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import StationList from './components/StationList'
import StationDetails from './components/StationDetails'
import AddStation from './components/AddStation'
import About from './components/About'


function App() {

  const [stations, setStations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stations')
      .then(res => res.json())
      .then(data => setStations(data))
  }, [])

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
          <Route path="/stations/:id" element={<StationDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;