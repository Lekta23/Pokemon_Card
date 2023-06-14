import PokemonCard from "./pokemonCard";
import "./listPokemonCardStyle.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ListPokemonCard = (props: any) => {
  console.log(props.listPokemon);
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/addPokemon");
        }}
      >
        Ajouter un pokemon
      </Button>
      <Grid container>
        {props.listPokemon.map((pokemon: any) => {
          return (
            <PokemonCard
              _id={pokemon.id}
              _idPokedex={pokemon._idPokedex}
              generation={pokemon.generation}
              name={pokemon.name}
              types={pokemon.types}
              stats={pokemon.stats}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ListPokemonCard;
