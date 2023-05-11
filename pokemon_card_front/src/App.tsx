import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Index from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
