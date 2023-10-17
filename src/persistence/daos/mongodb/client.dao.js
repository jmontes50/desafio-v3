import MongoDao from "./mongo.dao.js";
import { clientModel } from "./models/client.model.js";
import { createHash, isValidPassword } from "../../../utils.js";

export default class ClientDao extends MongoDao {
  constructor() {
    super(clientModel);
  }

  async register(client) {
    const { email, password } = client;
    const existClient = await this.getByEmail(email);
    if (!existClient) {
      const newClient = await this.create({
        ...client,
        password: createHash(password),
      });
      if (!newClient) return false;
      return newClient;
    }
    return false;
  }

  async getByEmail(email) {
    const client = await this.model.findOne({ email });
    if (client) return client;
    return false;
  }

  async login(client) {
    const { email, password } = client;
    const clientExists = await this.getByEmail(email);
    if (clientExists) {
      const passwordValid = isValidPassword(client, password);
      if (!passwordValid) return false;
      return clientExists;
    }
  }
}
