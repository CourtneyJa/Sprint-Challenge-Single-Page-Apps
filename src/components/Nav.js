import React from 'react';
import {Link} from 'react-dom';
import styled from 'styled-components';

const PortalMenu = styled.div`
display: flex;
justify-content: center;
&:hover{
    background-color: rgba(35, 207, 19, 0.3);
}`

const Button = styled.button`
font-size 16px;
border-radius: 4px;
background: rgb(240, 240, 240);
color: black;
margin: 50px 20px 50px 20px;
font-weight: bold;
&:hover{
    background-color: rgba(35, 207, 19, 0.3);
}`

export default function Navigation (){
    return (
        <PortalMenu className = "link-menu">
            <Link to= '/'><Button>Home Page</Button></Link>
            <Link to= '/characterlist'><Button>Cast Page</Button></Link>
            <Link to= '/locations'><Button>Locations</Button></Link>
        </PortalMenu>
    )
}


