// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import CharacterCard from "./CharacterCard";

// const Character = (props)=>{
//     const [cast, setCast] = useState();
//     useEffect(()=>{
//         const id = props.match.params.id;
//             axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//                  .then(res =>{
//                      setCast(res.data);
//                  })
//                  .catch(err =>{
//                      console.log(err);
//                  });
//     }, [props.match.params.id]);
//     return(<CharacterCard character={cast}/>)
// }

// export default Character