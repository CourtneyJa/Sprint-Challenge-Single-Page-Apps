import React from "react";

const LocationCard = props=> {
  return(
    <div className= "card">
      <h3 className="locale-name">{props.name}</h3>
      <p className="locale-type">{props.type}</p>    
      <p className="cast-dimension">{props.dimension}</p>
    </div>
  )
}

export default LocationCard;