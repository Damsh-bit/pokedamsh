import React from "react";
import "./pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;

  const Style = `pokemon__card-background ${pokemon.types[0].type.name}`;
  return (
    <div className="pokemon__card">
      <div className={Style}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <span>#{pokemon.id}</span>
      </div>

      <div className="card__info">
        <h3>{pokemon.name}</h3>
        
        <div className="card__type">
          <span>
            {pokemon.types.map((type, idx) => {
              const style = `card__type-type ${type.type.name}`
              return (
                <div className={style} key={idx}>
                  {type.type.name}
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
