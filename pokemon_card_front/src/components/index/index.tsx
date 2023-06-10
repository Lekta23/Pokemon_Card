//composant react

import { Button } from "@mui/material";
import IDisconnectService from "../../interfaces/login/disconnect.interface";
import DisconnectService from "../../services/login/disconnect.service";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../PokemonCard/pokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";


const Index = () => {
  const disconnectService: IDisconnectService = new DisconnectService();
  const navigate = useNavigate();
  const [listPokemon, setlistPokemon] = useState<IPokemon>();
  useEffect(() => {
    axios
      .get("http://localhost:5000/pokemons")
      .then((response) => {
        setlistPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Index</h1>
      <Button
        variant="contained"
        onClick={() => {
          console.log("click");
          disconnectService.disconnect(localStorage.getItem("token")!);
          navigate("/login");
        }}
      >
        Se deconnecter
      </Button>
      <PokemonCard />
    </div>
  );
};

export default Index;
