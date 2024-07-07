import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function itemDetail(){
    const { id } = useParams()
    const [ item, setItem ] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/stations/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
}

export default itemDetail;