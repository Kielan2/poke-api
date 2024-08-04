import React from 'react';
import Fetch from '../Fetch/Fetch';

const Pics = () => {
  const picsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  return (
    <Fetch url={picsUrl}>
      {data => (
        <div>
          {data.results.map(pokemon => (
            <div key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              {/* Fetch individual Pokemon details for the picture */}
              <Fetch url={pokemon.url}>
                {pokemonData => (
                  <div>
                    <img src={pokemonData.sprites.front_default} alt={pokemon.name} />
                  </div>
                )}
              </Fetch>
            </div>
          ))}
        </div>
      )}
    </Fetch>
  );
};

export default Pics;

