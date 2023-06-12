//composant react

import { Button } from "@mui/material";
import IDisconnectService from "../../interfaces/login/disconnect.interface";
import DisconnectService from "../../services/login/disconnect.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import ListPokemonCard from "../PokemonCard/listPokemonCard";

const Index = () => {
  const disconnectService: IDisconnectService = new DisconnectService();
  const navigate = useNavigate();
  const [listPokemon, setlistPokemon] = useState<Array<IPokemon>>([]);
  useEffect(() => {
    console.log("useEffect");
    console.log(localStorage.getItem("token"));
    axios
      .get("http://localhost:5000/pokemons", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(Array.isArray(response.data));
        setlistPokemon(response.data);
        console.log(listPokemon);
        console.log(Array.isArray(listPokemon));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (listPokemon) {
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
        {/* <ListPokemonCard {...listPokemon} />; */}
        <ListPokemonCard listPokemon={listPokemon} />
      </div>
    );
  } else {
    return <h1>Chargement</h1>;
  }
};

export default Index;
