import React, { useState } from 'react'

const PokemonFetch = () => {

  const [pokemonList, setPokemonList] = useState([])
  const fetchPokemon = async () => {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      let result = await response.json()
      setPokemonList(result.results)
    }
    catch (error) {
      console.log(error);
    }
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
