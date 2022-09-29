import { gql } from "@apollo/client";

export const GET_POKEMONS_FOR_CARD = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;

export const GET_POKEMON_ATTACK = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
