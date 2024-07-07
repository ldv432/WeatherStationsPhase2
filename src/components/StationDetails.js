import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StationDetails(){
    console.log("hello")
    const { id } = useParams()
    const [ station, setStation ] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/stations/${id}`)
            .then(res => res.json())
            .then(data => setStation(data))
    }, [id]);

    if (!station) return <div>Loading...</div>

    return (
        <div>
            <h2>{station.name}</h2>
            <h3>{station.price}</h3>
            <p>{station.description}</p>
            <img src={station.image} alt="Weather Station" />
        </div>
    )
}


export default StationDetails;