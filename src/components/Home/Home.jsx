import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import "./home.css";


const Home = () => {
  
  return (
    <div className="container centrar">
      <div>
        <img className="pokebola" src={pokebola} alt="pokebola" />
      </div>

      <h1 className="home__title">Pokedex by Damsh</h1>
      <span>this page is under construction...</span>
      <Link to="/pokedex">
        <button className="comenzar__button">Comenzar</button>
      </Link>
    </div>
  );
};

export default Home;
