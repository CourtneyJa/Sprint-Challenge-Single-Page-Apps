import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LocationsList() {
    const [places, setPlaces]= useState([]);

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/`)
             .then(res=>{
                 console.log(res);
                 const place = res.data.results
                 setPlaces(place)
             })
             .catch(err=>{
                 console.log("Get a job Jerry", err);
             });
    }, []);

    return(
        <div>
            {places.map(obj =>{
                return <div key = {obj.name} name = {obj.name} type= {obj.type} dimension = {obj.dimension} />;
            })}
        </div>
    );
}
