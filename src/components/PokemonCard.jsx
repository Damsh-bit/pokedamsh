import React from "react";
import "./pokemoncard.css";

const PokemonCard = ({ id, name, image, type }) => {
  const style = `card__container ${type}`;
  return (
    <div className={style}>
      <div></div>
      <div className="number">
        <span>#{id}</span>
      </div>
      <div className="card__detail">
        <h3 className="card__name">{name}</h3>
        <span className="card__type">Tipo {type}</span>
      </div>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokemonCard;
