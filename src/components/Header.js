import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const PortalMenu = styled.div`
display: flex;
justify-content: space-around;
padding: 3%;
width: 92%;
`



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <PortalMenu className = "link-menu">
            <Link style={{textDecoration: "none", color:"white", fontWeight:"bolder"}} to= '/'>Home Page</Link>
            <Link style={{textDecoration: "none", color:"white", fontWeight:"bolder"}} to= '/characterlist'>Cast Page</Link>
            <Link style={{textDecoration: "none", color:"white", fontWeight:"bolder"}} to= '/locations'>Locations</Link>
      </PortalMenu>
    </header>
  );
}
