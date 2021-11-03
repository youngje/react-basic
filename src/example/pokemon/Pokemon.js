import { useState, useEffect } from 'react'

function Pokemon({ pokemonToGet = 'gengar' }) {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToGet}/`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
      })
  }, [pokemonToGet])

  return (
    <div>
      { pokemon ? (
        <>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <p style={{ textTransform: 'capitalize' }}>Name: {pokemon.name}</p>
          <p style={{ textTransform: 'capitalize' }}>
            Type: {pokemon.types.map(x => x.type.name).join(', ')}
          </p>
        </>
      ) : 'Loading...'}
    </div>
  )
}

export default Pokemon
