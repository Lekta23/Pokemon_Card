// Service Login

import ILoginService from "../../interfaces/login/login.interface";

class LoginService implements ILoginService {
  async sendLogin(username: string, password: string) {
    console.log("LoginService.sendLogin()");
    console.log("username: " + username);
    console.log("password: " + password);

    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      mode: "cors",
    });
    const data = await response.json();
    return data;
  }
}

export default LoginService;
