import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCast = ()=>{
      axios.get("https://rickandmortyapi.com/api/character/")
           .then(res =>{
             setCast(res.data.results);
           })
           .catch(err=>{
             console.log(err);
           })
    }
    getCast();
  }, []);

  return (
    <section className="character-list">
      {cast.map(chars =>(
        <CharacterCard key={chars.id} character={chars} />
      ))}
    </section>
  );
}
