import axios from "axios";
import { addPokemon } from "./actions";

export const addPokemonThunk =
  (pokemonName, setError, setIsLoading) => (dispatch) => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        dispatch(addPokemon(res.data.name));
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
      });
  };
