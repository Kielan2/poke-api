import React from 'react';
import Fetch from '../Fetch/Fetch';

const Abilities = ({ pokemonUrl }) => {
  return (
    <Fetch url={pokemonUrl}>
      {data => (
        <div>
          <h3>Abilities:</h3>
          <ul>
            {data.abilities.map((abilityInfo, index) => (
              <li key={index}>{abilityInfo.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </Fetch>
  );
};

export default Abilities;

