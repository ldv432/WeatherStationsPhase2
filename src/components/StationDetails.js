import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StationDetails(){
    const { id } = useParams()
    const [ station, setStation ] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/stations/${id}`)
            .then(res => res.json())
            .then(data => setStation(data))
    }, [id]);

    if (!station) return <div>Loading...</div>

    return (
        <div>
            <h2>{station.name}</h2>
            <p>{station.description}</p>
        </div>
    )
}


export default StationDetails;