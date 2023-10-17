import MongoDao from "./mongo.dao.js";
import { movementModel } from "./models/movement.model.js";

export default class MovementDao extends MongoDao {
  constructor() {
    super(movementModel);
  }
}
