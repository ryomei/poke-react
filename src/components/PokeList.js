import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import "../styles/PokeList.css";
import { POKEMONS_QUERY } from "./../queries/poke-queries";
import Pokemon from "./../models/pokemon";
import { makeStyles } from "@material-ui/core/styles";
import {  
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.main,
    textTransform: "capitalize"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(100,100,100,0.7) 0%, rgba(100,100,100,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const PokeList = () => {
  const classes = useStyles();

  // States
  const [pokemons, setPokemons] = useState([]);
  const { data } = useQuery(POKEMONS_QUERY, {
    variables: {
      limit: 20,
      offset: 1,
    },
    fetchPolicy: "cache-and-network",
  });

  // Effects
  useEffect(() => {
    if (!data) return;
    const pokemongos = data.pokemons.results.map((data) => new Pokemon(data));
    setPokemons(pokemongos);
  }, [data]);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {pokemons.map((pokemon) => (
          <GridListTile key={pokemon.id}>
            <img src={pokemon.image} alt="mongo" />
            <GridListTileBar
              title={pokemon.name}
              classes={{ root: classes.titleBar, title: classes.title }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default PokeList;
