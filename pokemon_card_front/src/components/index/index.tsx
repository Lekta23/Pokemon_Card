//composant react

import { Button } from "@mui/material";
import IDisconnectService from "../../interfaces/login/disconnect.interface";
import DisconnectService from "../../services/login/disconnect.service";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const disconnectService: IDisconnectService = new DisconnectService();
  const navigate = useNavigate();
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
    </div>
  );
};

export default Index;
