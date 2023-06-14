import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginService from "../../services/login/login.service";
import ILoginService from "../../interfaces/login/login.interface";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginService: ILoginService = new LoginService();

  const handleLogin = async () => {
    const token = await loginService.sendLogin(username, password);
    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e : any) => setUsername(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e : any) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
