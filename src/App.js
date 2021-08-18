import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './comp/Header';
import PlanetInfo from './comp/PlanetInfo';
import PlanetMenu from './comp/PlanetMenu';


function App() {
  const [planets,setPlanets] = useState();
  const [loaded,setLoaded] = useState(false);
  const [focus,setFocus] = useState(null);
  

  let updateFocus = (focusedPlanet) => {
    setFocus(focusedPlanet);
  }

  useEffect( () => {
    fetch('https://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(result => {
        setPlanets(result.results);
        setLoaded(true);
      });
  }, []);

  if(loaded){
    return (
      <div className = "App">
        <Header />
        <PlanetMenu planets = {planets} updateFocus = {updateFocus} />
        <PlanetInfo props = {planets.filter(item => item.name === focus)} />
      </div>
    );
  }
  else{
    return(
      <div></div>
    )
  }
}

export default App;
