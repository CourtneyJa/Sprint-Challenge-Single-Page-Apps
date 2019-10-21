import React from "react";

import styled from 'styled-components';

const StaySchwifty = styled.div `
display: flex;
flex-direction: column;
align-content: center;
`
const MainImg = styled.img`
width: 70%;
height: 30%;
margin-left: 15%;`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StaySchwifty>
        
          <h1>Welcome to the ultimate fan site!</h1>
          <MainImg
            className="main-img"
            src="https://miro.medium.com/max/1920/1*1QJzJiri8js9PqwqlcOOCw.png"
            alt="rick"
          />
        
      </StaySchwifty>
    </section>
  );
}
