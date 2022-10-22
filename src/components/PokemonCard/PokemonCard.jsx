import React from "react";
import "./pokemoncard.css";

const PokemonCard = (props) => {
  const { pokemon_selected } = props;

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  function insertDecimal(num) {
    return Number((num / 10).toFixed(1));
  }

  return (
    <div className="pokemon__card-selected">
      <div className="">
        <img
          src={pokemon_selected.sprites.other.home.front_default}
          alt={pokemon_selected.name}
        />
      </div>

      <div className="card__info">
        <h3 className="pokemon__name">{capitalize(pokemon_selected.name)}</h3>

        <div className="card__type">
          <span>
            {pokemon_selected.types.map((type, idx) => {
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
            <progress value={pokemon_selected.stats[0].base_stat} max="100" />
            <span>{pokemon_selected.stats[0].base_stat}</span>
          </div>

          <div className="card__stat-info">
            <span>ATK</span>
            <progress value={pokemon_selected.stats[1].base_stat} max="100" />
            <span>{pokemon_selected.stats[1].base_stat}</span>
          </div>

          <div className="card__stat-info">
            <span>DEF</span>
            <progress value={pokemon_selected.stats[2].base_stat} max="100" />
            <span>{pokemon_selected.stats[2].base_stat}</span>
          </div>

          <div className="card__stat-info">
            <span>SATK</span>
            <progress value={pokemon_selected.stats[3].base_stat} max="100" />
            <span>{pokemon_selected.stats[3].base_stat}</span>
          </div>

          <div className="card__stat-info">
            <span>SDEF</span>
            <progress value={pokemon_selected.stats[4].base_stat} max="100" />
            <span>{pokemon_selected.stats[4].base_stat}</span>
          </div>

          <div className="card__stat-info">
            <span>SPD</span>
            <progress value={pokemon_selected.stats[5].base_stat} max="100" />
            <span>{pokemon_selected.stats[5].base_stat}</span>
          </div>
        </div>

        <div className="card__pokemon-data">
          <i class="uil uil-weight"></i>
          <span>{insertDecimal(pokemon_selected.weight)}kg</span>
          <i class="uil uil-ruler"></i>
          <span>{insertDecimal(pokemon_selected.height)}m</span>
        </div>

        <div className="card__pokemon-abilities">
          <h4>Abilities</h4>
          <div className="card__pokemon-ability" >
            <span>
              {pokemon_selected.abilities.map((ab, index) => {
                return (
                  <div className="card__pokemon-ability" key={index}>
                    <span>{ab.ability.name}</span>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
