import React from "react";
import styled from 'styled-components';


const SearchDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;`


export default function SearchForm (props) {
  return(
    <SearchDiv>
      <form>
        <input id="name" type="text" name="search" placeholder="Enter name here" value={props.value} onChange={props.onChange}/>
        <button type="submit">Submit</button>
      </form>
    </SearchDiv>
  );
}
