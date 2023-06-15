import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  CardMedia,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  FormControl,
} from "@mui/material";
import initListType from "../../utils/initListType";
import { useParams } from "react-router-dom";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import "./editPokemonStyle.css";

const EditPokemon = () => {
  const { _id } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  console.log(pokemon);

  useEffect(() => {
    fetch(`http://localhost:5000/pokemons/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
        setIdPokedex(data._idPokedex);
        setName(data.name);
        setGeneration(data.generation);
        setType1(data.types[0]);
        setType2(data.types[1]);
        setHp(data.stats.hp);
        setAttack(data.stats.attack);
        setDefense(data.stats.defense);
        setSpecialAttack(data.stats.specialAttack);
        setSpecialDefense(data.stats.specialDefense);
        setSpeed(data.stats.speed);
      });
  }, [_id]);

  const listType: Array<any> = initListType();
  const [_idPokedex, setIdPokedex] = useState<number | undefined>(
    pokemon?._idPokedex
  );
  const [name, setName] = useState<string | undefined>(pokemon?.name || "");
  const [generation, setGeneration] = useState<number | undefined>(
    pokemon?.generation || 1
  );
  const [type1, setType1] = useState<string | undefined>(
    pokemon?.types[0] || ""
  );
  const [type2, setType2] = useState<string | undefined>(
    pokemon?.types[1] || ""
  );
  const [hp, setHp] = useState<number | undefined>(pokemon?.stats.hp);
  const [attack, setAttack] = useState<number | undefined>(
    pokemon?.stats.attack || 0
  );
  const [defense, setDefense] = useState<number | undefined>(
    pokemon?.stats.defense || 0
  );
  const [specialAttack, setSpecialAttack] = useState<number | undefined>(
    pokemon?.stats.specialAttack || 0
  );
  const [specialDefense, setSpecialDefense] = useState<number | undefined>(
    pokemon?.stats.specialDefense || 0
  );
  const [speed, setSpeed] = useState<number | undefined>(
    pokemon?.stats.speed || 0
  );

  console.log(localStorage.getItem("token"));
  let imageURL = `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${_idPokedex}/regular.png`;
  console.log(defense);

  return (
    <Grid container>
      <div className="flexRow marginDiv">
        <h1>Editer un pokemon dans votre pokedex</h1>
        <Button
          variant="contained"
          onClick={() => (window.location.href = "/home")}
        >
          Retour
        </Button>
      </div>
      <Grid container>
        <Grid
          container
          item
          xs={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="cardEdit"
        >
          <Grid
            container
            xs={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
          >
            <TextField
              id="outlined-basic"
              label="ID Pokedex"
              variant="outlined"
              type="number"
              required
              value={_idPokedex || 1}
              onChange={(e: any) => {
                setIdPokedex(Number(e.currentTarget.value));
                imageURL = `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${_idPokedex}/regular.png`;
              }}
            />
            <TextField
              id="outlined-basic"
              label="Nom du pokemon"
              variant="outlined"
              value={name || ""}
              onChange={(e: any) => {
                setName(e.currentTarget.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Generation"
              variant="outlined"
              type="number"
              value={generation || 1}
              onChange={(e: any) => {
                setGeneration(Number(e.currentTarget.value));
              }}
            />
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type1 || ""}
                label="Type 1"
                onChange={(e) => {
                  setType1(e.target.value);
                }}
              >
                {listType.map((type: any) => {
                  return type;
                })}
              </Select>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type2 || ""}
                label="Type 2"
                onChange={(e) => {
                  setType2(e.target.value);
                }}
              >
                {listType.map((type: any) => {
                  return type;
                })}
              </Select>
            </Container>
            <Button
              onClick={() => {
                const pokemon = {
                  _idPokedex: _idPokedex,
                  name: name,
                  generation: generation,
                  types: [type1, type2],
                  stats: {
                    hp: hp,
                    attack: attack,
                    defense: defense,
                    specialAttack: specialAttack,
                    specialDefense: specialDefense,
                    speed: speed,
                  },
                  token: localStorage.getItem("token"),
                };
                fetch("http://localhost:5000/pokemons/" + _id, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(pokemon),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    window.location.href = `/home`;
                    console.log(res);
                  });
              }}
              variant="contained"
            >
              Modifier le pokemon
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              id="outlined-basic"
              label="HP"
              variant="outlined"
              type="number"
              value={hp || 0}
              onChange={(e: any) => {
                setHp(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Attaque"
              variant="outlined"
              type="number"
              value={attack || 0}
              onChange={(e: any) => {
                setAttack(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Defense"
              variant="outlined"
              type="number"
              value={defense || 0}
              onChange={(e: any) => {
                setDefense(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Attaque Spéciale"
              variant="outlined"
              type="number"
              value={specialAttack || 0}
              onChange={(e: any) => {
                setSpecialAttack(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Defense Spéciale"
              variant="outlined"
              type="number"
              value={specialDefense || 0}
              onChange={(e: any) => {
                setSpecialDefense(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Vitesse"
              variant="outlined"
              type="number"
              value={speed || 0}
              onChange={(e: any) => {
                setSpeed(Number(e.currentTarget.value));
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <CardMedia
            component="img"
            image={imageURL}
            style={{ width: "80%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPokemon;
