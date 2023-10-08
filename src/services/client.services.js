/* eslint-disable class-methods-use-this */
import pkg from "jsonwebtoken";
import Services from "./class.services.js";
import ClientDao from "../daos/mongodb/client.dao.js";
import config from "../config.js";

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
      cart: client.cart,
    };
    return pkg.sign(payload, config.SECRET_KEY_JWT, { expiresIn: "3m" });
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
