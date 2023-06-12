import React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import "./pokemonCardStyle.css";

const PokemonCard = (props: any) => {
  console.log(props);
  let types = <div></div>;

  if (props.types[1] === undefined) {
    types = (
      <div className="pokemon-card--type">
        <CardMedia
          className="pokemon-card--type-image"
          component="img"
          image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${props.types[0]}.png`}
        />

        <Typography>{props.types[0]}</Typography>
      </div>
    );
  } else {
    types = (
      <div>
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
    );
  }

  return (
    <Card
      className="pokemon-card"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(props._idPokedex);
      }}
    >
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
      {types}
    </Card>
  );
};

export default PokemonCard;
