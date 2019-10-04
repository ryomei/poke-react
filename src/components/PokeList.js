import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "../styles/PokeList.css";

export default class PokeList extends Component {
  renderPokemon(pokemon) {
    return (
      <ul>
        <li key={pokemon.id} className="pokecard">
          <section>
            <header>
              {pokemon.name} #({pokemon.number})
            </header>
            <div className="pokeball">
              <img src={pokemon.image} />
            </div>
            <footer>
              <table>
                <tbody class="poke-info-rows">
                  <tr>
                    <td>Classificação</td>
                    <td>{pokemon.classification}</td>
                  </tr>
                  <tr>
                    <td>Tipos</td>
                    <td>{pokemon.types.join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Fraco contra</td>
                    <td>{pokemon.weaknesses.join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Taxa de fuga</td>
                    <td>{pokemon.fleeRate}</td>
                  </tr>
                </tbody>
              </table>
            </footer>
          </section>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <Query query={POKEMONS_QUERY}>
        {props => {
          console.log(props);
          const { data, loading, error } = props;
          if (loading) {
            return <div>Loading</div>;
          }

          if (error) {
            return <div>An unexpected error occurred</div>;
          }

          return <ul>{data.pokemons.map(this.renderPokemon)}</ul>;
        }}
      </Query>
    );
  }
}

const POKEMONS_QUERY = gql`
  query pokemons {
    pokemons(first: 151) {
      id
      number
      name
      image
      classification
      types
      weaknesses
      fleeRate
    }
  }
`;
