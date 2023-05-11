interface IDisconnectService {
    disconnect(token : string): Promise<any>;
}

export default IDisconnectService;