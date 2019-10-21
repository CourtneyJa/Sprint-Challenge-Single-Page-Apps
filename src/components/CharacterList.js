import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';


const Cardcont = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;`


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  //const [state, setState] = useState([]);

  const [cast, setCast] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    //const getCast=() =>{
      axios.get("https://rickandmortyapi.com/api/character/")
           .then(res =>{
             const people = res.data.results
             setCast(people);
           })
           .catch(err=>{
             console.log(err);
           });
          //  if (localStorage.getItem("characters") === null);{
          //    fetch();
          //  }   
  }, []);

  return (
    <Cardcont className="character-list">
      {cast.map(chars =>{
        return <CharacterCard key={chars.id} image={chars.image} name={chars.name} status={chars.status} species={chars.species}/>
      })}
    </Cardcont>
  );
}

