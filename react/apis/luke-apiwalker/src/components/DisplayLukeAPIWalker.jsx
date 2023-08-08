import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const DisplayLukeAPIWalker = (props) => {
  const [character, setCharacter] = useState('');
  const [planet, setPlanet] = useState('');
  const navigate = useNavigate();

  const { category } = useParams()
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then(response =>
        category === "people" ? setCharacter(response.data) : setPlanet(response.data))
      .catch(err => {
        console.log(err)
        navigate("/error")
      })
  }, [id, category])


  if (category === "people" && character.name) {
    return (
      <div className='mt-5'>
        <h2 className='mb-3'>{character.name}</h2>
        <h5>Height: {character.height} cm</h5>
        <h5>Mass: {character.mass} kg</h5>
        <h5>Hair Color: {character.hair_color}  </h5>
        <h5>Skin Color: {character.skin_color}  </h5>
      </div>
    )
  }
  else if (category === "planets" && planet.name) {
    return (
      <div className='mt-5'>
        <h2 className='mb-3'>{planet.name}</h2>
        <h5>Climate: {planet.climate}</h5>
        <h5>Terrain: {planet.terrain}</h5>
        <h5>Surface Water: {parseInt(planet.surface_water) > 0 ? "True" : "False"}  </h5>
        <h5>Population: {planet.population}  </h5>
      </div>)
  }
}

export default DisplayLukeAPIWalker
