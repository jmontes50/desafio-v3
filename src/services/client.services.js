import pkg from "jsonwebtoken";
import Services from "./class.services.js";

const SECRET_KEY = process.env.JWT_SECRET;

import ClientDao from "../daos/mongodb/client.dao.js";

const clientDao = new ClientDao();

export default class ClientServices extends Services {
  constructor() {
    super(clientDao);
  }

  #generateToken(client) {
    const payload = {
      id: client._id,
      name: client.name,
      email: client.email,
    };
    return pkg.sign(payload, SECRET_KEY, { expiresIn: "3m" });
  }

  async register(client) {
    try {
      return await clientDao.register(client);
    } catch (error) {
      console.error(error);
    }
  }

  async login(client) {
    const clientExists = await clientDao.login(client);
    if (clientExists) {
      const token = this.#generateToken(clientExists);
      return { token };
    }
    return false;
  }
}
