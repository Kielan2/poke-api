import React, { useState } from 'react';

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPokemon();
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Pokémon ID or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className='Error'><br></br>No Pokemon Found. Check the grass...</div>}
      {pokemon && (
		<div className='Pokedex'>
        <div className='Leftside'>
		<h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
		  </div>
		  <div className='Rightside'>
          
		  <p>ID: {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          <h3>Moves:</h3>
          <ul>
            {pokemon.moves.slice(0, 4).map((moveInfo, index) => (
              <li key={index}>{moveInfo.move.name}</li>
            ))}
          </ul>
		  </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
