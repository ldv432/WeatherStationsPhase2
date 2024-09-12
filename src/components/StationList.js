import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function StationList( {stations} ) {

  const [filterAmount, setFilterAmount] = useState(0)

  const filteredStations = stations.filter(station => {
    if (filterAmount === 0) return true
    return station.price < filterAmount
  })

  return (
    <div>
      <h2> List of Stations </h2>
      <button onClick={() => setFilterAmount(100)}>Stations under $100</button>
      <button onClick={() => setFilterAmount(300)}>Stations under $300</button>
      <button onClick={() => setFilterAmount(0)}>All Stations</button>
      <ul>
        {filteredStations.map(station => (
          <li key={station.id}>
            <Link to={`/stations/${station.id}`}>{station.name} {`$${station.price}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StationList