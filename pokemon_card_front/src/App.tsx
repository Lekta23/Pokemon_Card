import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/login";
import "./App.css";
import Index from "./components/index";
import DetailPokemon from "./components/PokemonCard/detailPokemon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Index />}></Route>
        <Route path="" element={<Navigate to="/login" />} />
        <Route path="/detailPokemon/:_id" element={<DetailPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
