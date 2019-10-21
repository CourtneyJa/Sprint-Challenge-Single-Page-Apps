import React from "react";
import styled from 'styled-components';

const Chardiv = styled.div`
width: 40%;
height: 40%;
`

const CardContainer= styled.div`
width: 70%;
padding: 2%;`

const CharacterCard = props =>{
  return(      
    <Chardiv>
      <CardContainer>
      <img src={props.image} alt="Cast Pic"/>          
      </CardContainer>
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>
    </Chardiv>
  
  )
}

export default CharacterCard;

