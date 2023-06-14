import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import "./pokemonCardStyle.css";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

// mettre tout en minuscule
const lowercase = (str: string) => {
  return str.toLowerCase();
};

const PokemonCard = (props: IPokemon) => {
  console.log(props);
  let types = <div></div>;

  if (props.types[1] === "") {
    types = (
      <div className="pokemon-card--type">
        <CardMedia
          className="pokemon-card--type-image"
          component="img"
          image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
            props.types[0]
          )}.png`}
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
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
              props.types[0]
            )}.png`}
          />

          <Typography>{props.types[0]}</Typography>
        </div>

        <div className="pokemon-card--type">
          <CardMedia
            className="pokemon-card--type-image"
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
              props.types[1]
            )}.png`}
          />

          <Typography>{props.types[1]}</Typography>
        </div>
      </div>
    );
  }

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
      {types}
      <CardActions disableSpacing>
        <IconButton
          aria-label="detail"
          onClick={() => {
            window.location.href = `/detailPokemon/${props._id}`;
          }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={() => {
            window.location.href = `/editPokemon/${props._id}`;
          }}
        >
          <ModeEditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            fetch(`http://localhost:5000/pokemons/${props._id}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                window.location.reload();
              });
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
