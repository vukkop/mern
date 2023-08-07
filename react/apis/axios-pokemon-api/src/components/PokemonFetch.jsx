import React, { useState } from 'react'
import axios from 'axios';

const PokemonFetch = () => {
  const [pokemonList, setPokemonList] = useState([])

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response => {
      setPokemonList(response.data.results)
    })
  }

  return (
    <div className='container mt-5'>
      <button onClick={fetchPokemon} className='btn btn-secondary'>Fetch Pokemon</button>

      <div>
        <h3 className='mt-4'>Pokemon List</h3>
        <ul>
          {
            pokemonList.map((pokemon, i) =>
              <li key={i}>{pokemon.name}</li>
            )
          }
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PokemonFetch
