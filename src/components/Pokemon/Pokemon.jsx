import React from "react";
import "./pokemon.css";

const Pokemon = (props) => {
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const { pokemon } = props;

  const Style = `pokemon__card-background ${pokemon.types[0].type.name}`;
  return (
    <div className="pokemon__card">
      <div className={Style}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="card__info">
        <h3 className="pokemon__name">{capitalize(pokemon.name)}</h3>

        <div className="card__type">
          <span>
            {pokemon.types.map((type, idx) => {
              const style = `card__type-type ${type.type.name}`;
              return (
                <div className={style} key={idx}>
                  {capitalize(type.type.name)}
                </div>
              );
            })}
          </span>
        </div>
        <div className="card__stats">
        <div className="card__stat-info">
          <span>HP</span>
          <progress value={pokemon.stats[0].base_stat} max="100" />
          <span>{pokemon.stats[0].base_stat}</span>
        </div>

        <div className="card__stat-info">
          <span>ATK</span>
          <progress value={pokemon.stats[1].base_stat} max="100" />
          <span>{pokemon.stats[1].base_stat}</span>
        </div>

        <div className="card__stat-info">
          <span>DEF</span>
          <progress value={pokemon.stats[2].base_stat} max="100" />
          <span>{pokemon.stats[2].base_stat}</span>
        </div>

        <div className="card__stat-info">
          <span>SATK</span>
          <progress value={pokemon.stats[3].base_stat} max="100" />
          <span>{pokemon.stats[3].base_stat}</span>
        </div>

        <div className="card__stat-info">
          <span>SDEF</span>
          <progress value={pokemon.stats[4].base_stat} max="100" />
          <span>{pokemon.stats[4].base_stat}</span>
        </div>

        <div className="card__stat-info">
          <span>SPD</span>
          <progress value={pokemon.stats[5].base_stat} max="100" />
          <span>{pokemon.stats[5].base_stat}</span>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Pokemon;
