// page detail pokemon avec son _id en paramètre

// Path: pokemon_card_front\src\components\PokemonCard\detailPokemon.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import "./detailPokemonStyle.css";
import Typography from "@mui/material/Typography";
import { colorTypeGradients } from "../../utils/colorType";
import { Button, Grid } from "@mui/material";

const DetailPokemon = () => {
  const lowercase = (str: string) => {
    return str.toLowerCase();
  };

  const { _id } = useParams();
  console.log(_id);
  const [pokemon, setPokemon] = useState<IPokemon>();
  const stats = pokemon?.stats;
  let finalColor;

  if (pokemon?.types.length === 2) {
    finalColor = colorTypeGradients(pokemon?.types[0], pokemon?.types[1], 2);
  } else {
    finalColor = colorTypeGradients(pokemon?.types[0], pokemon?.types[0], 1);
  }

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
    if (pokemon?.types[1] === "") {
      types = (
        <div className="row">
          <CardMedia
            className="pokemon-card--type-image"
            component="img"
            image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
              pokemon?.types[0]
            )}.png`}
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
              image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
                pokemon?.types[0]
              )}.png`}
            />

            <Typography>{pokemon?.types[0]}</Typography>
          </div>

          <div className="pokemon-card--type">
            <CardMedia
              className="pokemon-card--type-image"
              component="img"
              image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${lowercase(
                pokemon?.types[1]
              )}.png`}
            />

            <Typography>{pokemon?.types[1]}</Typography>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="flexRow marginDiv">
        <h1>Voir le pokemon</h1>
        <Button
          variant="contained"
          onClick={() => (window.location.href = "/home")}
        >
          Retour
        </Button>
      </div>
      <div
        className="cardDetail"
        style={{
          background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
        }}
      >
        <h1 className="alignCenter">{pokemon?.name}</h1>
        <div className="row">
          <div className="colunm">
            <div className="pokemon-card--sprite">
              <CardMedia
                component="img"
                image={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${pokemon?._idPokedex}/regular.png`}
              />
            </div>
            {types}
          </div>
          <div className="display column">
            <div>
              <div className="column">
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
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
