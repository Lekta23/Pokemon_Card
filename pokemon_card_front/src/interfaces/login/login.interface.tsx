interface ILoginService {
  sendLogin(username: string, password: string): Promise<any>;
}

export default ILoginService;
