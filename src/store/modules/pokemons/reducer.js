import { ADD_POKEMON } from "./actionsTypes";

const pokemonsReducer = (state = [], { type, pokemon }) => {
  switch (type) {
    case ADD_POKEMON:
      return [...state, pokemon];

    default:
      return state;
  }
};

export default pokemonsReducer;
