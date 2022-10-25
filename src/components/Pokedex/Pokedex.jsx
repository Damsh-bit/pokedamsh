import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "./Pagination";
import { getPokemonData, getPokemons, searchPokemon } from "../../api";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import Pokemon from "../Pokemon/Pokemon";
import pokebolaGIF from "../../assets/pokebola.gif";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";

const Pokedex = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [Toggle, showMenu] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  const givePokemonInfo = async (namePokemon) => {
    try {
      setPokemonName(namePokemon);
      showMenu(true);
      let url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
      const data = await getPokemonData(url);
      setPokemon(data);
    } catch (err) {}
  };

  
  return (
    <div className="container__pokedex">
      <Link to="/">
        <i class="uil uil-arrow-circle-left arrow__back"></i>
      </Link>
      <div className="header">
        <div className="header__title">
          <h1 id="title">Pokedex by Damsh</h1>
        </div>
        <div className="header__items">
          <SearchBar onSearch={onSearch} />
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </div>
      </div>
      {notFound ? (
        <div>No se encontro el Pokemon buscado</div>
      ) : (
        <div className="app__container">
          {loading ? (
            <div>
              <img src={pokebolaGIF} alt="" />
            </div>
          ) : (
            <div className="pokemon__container">
              <div className="all__container">
                {pokemons.map((pokemon, idx) => {
                  return (
                    <button onClick={() => givePokemonInfo(pokemon.name)}>
                      <Pokemon pokemon={pokemon} key={pokemon.name} />
                    </button>
                  );
                })}
              </div>

              <div
                className={
                  Toggle
                    ? "pokemon__selected show__pokemon-selected"
                    : "pokemon__selected"
                }
              >
                {pokemon.length == 0 ? (
                  <div></div>
                ) : (
                  <div className="pokemon__details">
                    <button onClick={() => showMenu(!Toggle)}>
                      <i class="uil uil-multiply"></i>
                    </button>
                    <PokemonCard pokemon_selected={pokemon} key={pokemon.name} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
