import React, { ChangeEventHandler, useState } from "react";
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

const AddPokemon = () => {
  const listType: Array<any> = initListType();
  const [_idPokedex, setIdPokedex] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [generation, setGeneration] = useState<number>(1);
  const [type1, setType1] = useState<string>("Acier");
  const [type2, setType2] = useState<string>("");
  const [hp, setHp] = useState<number>(0);
  const [attack, setAttack] = useState<number>(0);
  const [defense, setDefense] = useState<number>(0);
  const [specialAttack, setSpecialAttack] = useState<number>(0);
  const [specialDefense, setSpecialDefense] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);

  let imageURL = `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${_idPokedex}/regular.png`;
  console.log(localStorage.getItem("token"));

  return (
    <Grid container>
      <h1>Ajouter un pokemon dans votre pokedex</h1>
      <Grid container>
        <Grid
          container
          item
          xs={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
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
              value={_idPokedex}
              onChange={(e: any) => {
                setIdPokedex(Number(e.currentTarget.value));
                imageURL = `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${_idPokedex}/regular.png`;
              }}
            />
            <TextField
              id="outlined-basic"
              label="Nom du pokemon"
              variant="outlined"
              value={name}
              onChange={(e: any) => {
                setName(e.currentTarget.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Generation"
              variant="outlined"
              type="number"
              value={generation}
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
                value={type1}
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
                value={type2}
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
                fetch("http://localhost:5000/pokemons", {
                  method: "POST",
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
              Ajouter le pokemon
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
              value={hp}
              onChange={(e: any) => {
                setHp(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Attaque"
              variant="outlined"
              type="number"
              value={attack}
              onChange={(e: any) => {
                setAttack(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Defense"
              variant="outlined"
              type="number"
              value={defense}
              onChange={(e: any) => {
                setDefense(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Attaque Spéciale"
              variant="outlined"
              type="number"
              value={specialAttack}
              onChange={(e: any) => {
                setSpecialAttack(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Defense Spéciale"
              variant="outlined"
              type="number"
              value={specialDefense}
              onChange={(e: any) => {
                setSpecialDefense(Number(e.currentTarget.value));
              }}
            />
            <TextField
              id="outlined-basic"
              label="Vitesse"
              variant="outlined"
              type="number"
              value={speed}
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

export default AddPokemon;
