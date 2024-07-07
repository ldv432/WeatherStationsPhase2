import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function StationList() {

  const [stations, setStations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stations')
      .then(res => res.json())
      .then(data => setStations(data))
  })
  
  return (
    <div>
      <h2> List of Stations </h2>
      <ul>
        {stations.map(station => (
          <li key={station.id}>
            <Link to={`/stations/${station.id}`}>{station.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StationList  