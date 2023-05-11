import IDisconnectService from "../../interfaces/login/disconnect.interface";

class DisconnectService implements IDisconnectService {
  async disconnect(token: string) {
    console.log("DisconnectService.disconnect()");
    console.log(token);
    const response = await fetch("http://localhost:5000/users/disconnect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
      mode: "cors",
    });
    const data = await response.json();
    return data;
  }
}

export default DisconnectService;
