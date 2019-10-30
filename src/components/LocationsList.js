import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [places, setPlaces]= useState([]);

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/location/')
             .then(res=>{
                 console.log(res);
                 const location = res.data.results
                 setPlaces(location)
             })
             .catch(err=>{
                 console.log("Get a job Jerry", err);
             });
    }, []);

    return(
        <div>
            {places.map(place =>{
                return (
                 <LocationCard 
                    key = {place.id} 
                    name = {place.name} 
                    type= {place.type} 
                    dimension = {place.dimension}/>   
                )
            
            })}
        </div>
    );
}
