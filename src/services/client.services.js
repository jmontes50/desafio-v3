import Services from "./class.services.js";

import ClientDao from "../daos/mongodb/client.dao.js";

const clientDao = new ClientDao();

export default class ClientServices extends Services {
  constructor() {
    super(clientDao);
  }
}
