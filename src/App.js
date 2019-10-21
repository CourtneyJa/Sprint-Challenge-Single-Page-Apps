import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
//import Character from './components/Character';
import Navigation from './components/Nav';
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import LocationsList from './components/LocationsList'


export default function App() {
  return (
    <main>
      <Header />
      <Route path = '/Search' component={SearchForm}/>
      {/* <Navigation/> */}
      <Route exact path = "/" component={WelcomePage} />
      <Route path = "/characterlist" component= {CharacterList}/>
      <Route path = '/locations' component={LocationsList}/>
    </main>
  );
}