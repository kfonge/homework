
// 1. Import useState and useEffect
import './App.css';
import React, {useState, useEffect} from 'react'
import swapi from './services/Swapi';
function App() {
  // 2. inside your function, but above return, Create our  variable as well as the set function via useState
  //(set default value to null or empty string) so that while we're waiting for fetch to complete, we dont attempt to render the image
  const [StarShips, setStarShips] = useState([])
  
  // 3. Creating useEffect function
  useEffect(() => {
    swapi()
      .then(response => response.json())  
  // 4. set StarShips to the url received from the response on 14
      .then((response) => setStarShips(response.results))
  
  }, []) 
  
  return (
    <div id="App">
      <h1> Starwars Starships </h1>
      <ul id='ul'>
      {StarShips.map((eachShip) => (
        <li id='li'>
            <div id='name'>
            <h3>{eachShip.name}</h3>
            <br />  
          </div>
        </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
