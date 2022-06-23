import { useSelector } from "react-redux";

const Pokemons = () => {
  const pokemons = useSelector(({pokemons}) => pokemons);

  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemons;
