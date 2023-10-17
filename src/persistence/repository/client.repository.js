import ClientDTORegister from "../dtos/client.dto.register.js";
import ClientDTOResponse from "../dtos/client.dto.response.js";
import ClientDao from "../daos/mongodb/client.dao.js";

export default class ClientRepository {
  constructor() {
    this.dao = ClientDao;
  }

  async register(client) {
    const clientDTO = new ClientDTORegister(client);
    // eslint-disable-next-line no-return-await
    return await this.dao.register(clientDTO);
  }

  async getByEmail(email) {
    const client = await this.dao.getByEmail(email);
    return new ClientDTOResponse(client);
  }

  async login(client) {
    const clientToSignIn = await this.dao.login(client);
    return new ClientDTOResponse(clientToSignIn);
  }
}
