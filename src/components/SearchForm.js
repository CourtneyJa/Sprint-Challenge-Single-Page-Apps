import React, { useState, useEffect } from "react";
import {Formik, Form, Field} from 'formik';
import CharacterCard from './CharacterCard';

import axios from 'axios';



export default function SearchForm(props) {


  const [cast, setCast] = useState([]);

  useEffect(()=>{
    const getCast = ()=>{
      axios.get("https://rickandmortyapi.com/api/character/")
           .then(res =>{
             setCast(res.data.results);
           })
           .catch(err=>{
             console.log("burp", err);
           });
    }
    getCast();
  }, []);
 
  return (
    <div className="search-form">
      
    </div>
  );
}
