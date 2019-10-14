import React from "react";
import {Link} from 'react-router-dom';

const CharacterCard= cast => {
  const {name, status, species, image, id} = cast.character;
  return (
    <div className = "cast-wrap">
      <div className = "cast-card">
        <Link to ={`/results/${id}`}>
          <h3>{name}</h3>
        </Link>
        <Link to= "/list">
          <div className= "pic">
            <img src= {image} alt = {`Pic of ${name}`}/>
          </div>
        </Link>
        <div className="squanch">
          Species: <strong>{species}</strong>
        </div>
        <div className="stats">
          Status: <em>{status}</em>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
