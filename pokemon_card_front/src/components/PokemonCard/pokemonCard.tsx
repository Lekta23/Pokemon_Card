import React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import "./pokemonCardStyle.css";

const PokemonCard = (props: any) => {
  console.log(props);

  const pokeData = {
    pokedexId: 25,
    generation: 1,
    name: {
      fr: "Pikachu",
      en: "Pikachu(en)",
    },
    sprites: {
      regular:
        "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/regular.png",
    },
    types: [
      {
        name: "Électrik",
        image:
          "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png",
      },
      {
        name: "Eau",
        image:
          "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png",
      },
    ],
    stats: {
      hp: 45,
      atk: 80,
      def: 50,
      spe_atk: 75,
      spe_def: 60,
      vit: 120,
    },
  };

  return (
    <Card className="pokemon-card">
      <div className="pokemon-card--header">
        <Typography>ID : {props._idPokedex}</Typography>

        <Typography>Gen : {props.generation}</Typography>
      </div>

      <Typography className="center">{props.name}</Typography>

      <div className="pokemon-card--sprite">
        <CardMedia
          component="img"
          image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${props._idPokedex}/regular.png`}
        />
      </div>

      <div className="center">
        <div className="pokemon-card--type">
          <CardMedia
            className="pokemon-card--type-image"
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${props.types[0]}.png`}
          />

          <Typography>{props.types[0]}</Typography>
        </div>

        <div className="pokemon-card--type">
          <CardMedia
            className="pokemon-card--type-image"
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${props.types[1]}.png`}
          />

          <Typography>{props.types[1]}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
