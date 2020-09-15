import { gql } from "@apollo/client";

const POKEMONS_QUERY = gql`
  query GetPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        image
        url
      }
    }
  }
`;

export { POKEMONS_QUERY };
