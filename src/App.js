import "./App.css";
import PokemonCard from "./components/PokemonCard";
import pokebola from "./assets/pokebola.png";
import { useEffect, useState } from "react";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "http://pokeapi.co/api/v2/pokemon?limit=20",referrerPolicy = "unsafe_url" 
  );

  const getAllPokemons = async () => {
    const title = document.getElementById("title");
    const pokebola = document.getElementById("pokebola");
    pokebola.style.opacity = 0;
    title.style.top = 0;
    title.style.left = 0;
    title.style.position = "sticky";

    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,referrerPolicy = "unsafe_url" 
          
        );
        const data = await response.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);

    await console.log(allPokemons);
  };

  useEffect(() => {}, []);
  return (
    <div className="app__container">
      <img id="pokebola" src={pokebola} alt="pokebola"/>
      <h1 id="title">Pokedex by Damsh</h1>
      <div className="pokemon__container">
        <div className="all__container">
          {allPokemons.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
      </div>
      <button
        className="load__more"
        id="load_more"
        onClick={() => getAllPokemons()}
      >
        Cargar más
      </button>
    </div>
  );
}

export default App;
