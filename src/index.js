import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "../src/components/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const PUBLIC_APIS = {
  backupList: [
    "https://graphql-pokemon.now.sh",
    "https://pokeapi-graphiql.herokuapp.com",
    "https://mazipan-gql-pokeapi.herokuapp.com/graphql",
  ],
  uri: "https://mazipan-gql-pokeapi.herokuapp.com/graphql",
};

const client = new ApolloClient({
  uri: PUBLIC_APIS.uri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
