import React, {useState, useEffect} from 'react';
import './../../css/Main.css';

const App = () => {
  // Aqui deberiamos usar fetch para poder ir a buscar info
  // y  luego mostrarlo

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=20`)
    .then(res => res.json())
    .then((data) => {
      console.log(data.results)
      setPokemons(data.results)
      
      })
  },[])

  return (
    <div>
      {pokemons.map( (pokemon) => <p> {pokemon.name} </p> )}
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  // Aqui deberiamos usar fetch para poder ir a buscar info
  // y  luego mostrarlo

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.mercadolibre.com/sites/MLA/search?q=caballero%20del%20zodiaco'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div class="list">
      {data &&
        data.map(item => (
          <a href={item.permalink} key={item.id} class="item">
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
          </a>
        ))}
    </div>
  );
};

export default App;