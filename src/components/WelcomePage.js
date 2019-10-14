import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StaySchwifty = styled.div `
display: flex;
flex-direction: column;
align-content: center;
`
const MainImg = styled.img`
width: 80%;
display: flex;
justify-items: center;`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StaySchwifty>
        <Link to="/list">
          <h1>Welcome to the ultimate fan site!</h1>
          <MainImg
            className="main-img"
            src="https://miro.medium.com/max/1920/1*1QJzJiri8js9PqwqlcOOCw.png"
            alt="rick"
          />
        </Link>
      </StaySchwifty>
    </section>
  );
}
