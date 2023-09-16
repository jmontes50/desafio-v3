import MongoDao from "./mongo.dao.js";
import { clientModel } from "./models/client.model.js";

export default class ClientDao extends MongoDao {
  constructor() {
    super(clientModel);
  }
}
