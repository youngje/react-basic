import { useState } from 'react'
import Pokemon from './Pokemon'

function PokemonForm() {
  const [inputValue, setInputValue] = useState('rowlet')
  const [pokemonToGet, setPokemonToGet] = useState('gengar')
  function getPokemon() {
    setPokemonToGet(inputValue.trim().toLowerCase())
    setInputValue('')
  }
  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button onClick={getPokemon}>
        Get Pokemon
      </button>
      <Pokemon pokemonToGet={pokemonToGet} />
    </div>
  )
}

export default PokemonForm
