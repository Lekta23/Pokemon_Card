// page detail pokemon avec son _id en paramètre

// Path: pokemon_card_front\src\components\PokemonCard\detailPokemon.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import "./detailPokemonStyle.css";
import { ImageList } from "@mui/material";

const DetailPokemon = () => {
  const { _id } = useParams();
  console.log(_id);
  const [pokemon, setPokemon] = useState<IPokemon>();
  const stats = pokemon?.stats;
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?._idPokedex}.png`;

  // transforme stats en tableau
  const statsArray = Object.entries(stats ?? {});
  console.log(statsArray);

  useEffect(() => {
    fetch(`http://localhost:5000/pokemons/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, [_id]);

  let types = <div></div>;

  if (pokemon?.types !== undefined) {
    if (pokemon?.types[1] === undefined) {
      types = (
        <div className="row">
          <CardMedia
            className="pokemon-card--type-image"
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${pokemon?.types[0]}.png`}
          />

          <Typography>{pokemon?.types[0]}</Typography>
        </div>
      );
    } else {
      types = (
        <div className="row">
          <div className="pokemon-card--type">
            <CardMedia
              className="pokemon-card--type-image"
              component="img"
              image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${pokemon?.types[0]}.png`}
            />

            <Typography>{pokemon?.types[0]}</Typography>
          </div>

          <div className="pokemon-card--type">
            <CardMedia
              className="pokemon-card--type-image"
              component="img"
              image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${pokemon?.types[1]}.png`}
            />

            <Typography>{pokemon?.types[1]}</Typography>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h1 className="alignCenter">{pokemon?.name}</h1>
      <div className="display row">
        <div className="pokemon-card--sprite">
          <CardMedia
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${pokemon?._idPokedex}/regular.png`}
          />
        </div>
      </div>
      {types}
      <div>
        <div className="row">
          {statsArray.map((stat, index) => {
            if (index > 3) {
              return (
                <div className="row">
                  <h3>{stat[0]}</h3>
                  <p>{stat[1]}</p>
                </div>
              );
            } else {
              return (
                <div className="row">
                  <h3>{stat[0]}</h3>
                  <p>{stat[1]}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPokemon;
