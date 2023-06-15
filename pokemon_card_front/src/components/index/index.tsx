//composant react

import { Button } from "@mui/material";
import IDisconnectService from "../../interfaces/login/disconnect.interface";
import DisconnectService from "../../services/login/disconnect.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import IPokemon from "../../interfaces/pokemon/pokemon.interface";
import ListPokemonCard from "../PokemonCard/listPokemonCard";
import "./index.css";

const Index = () => {
  const disconnectService: IDisconnectService = new DisconnectService();
  const navigate = useNavigate();
  const [listPokemon, setlistPokemon] = useState<Array<IPokemon>>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pokemons", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setlistPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (listPokemon) {
    return (
      <div>
        <div className="flexRow marginDiv">
          <h1>Mon Pokedex</h1>
          <Button
            className="marginButton"
            variant="contained"
            onClick={() => {
              console.log("click");
              disconnectService.disconnect(localStorage.getItem("token")!);
              navigate("/login");
            }}
          >
            Se deconnecter
          </Button>
        </div>
        <br />
        <ListPokemonCard listPokemon={listPokemon} />
      </div>
    );
  } else {
    return (
      <div>
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
        <h1>Chargement</h1>;
      </div>
    );
  }
};

export default Index;
