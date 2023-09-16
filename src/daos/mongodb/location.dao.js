import MongoDao from "./mongo.dao.js";
import { locationModel } from "./models/location.model.js";

export default class LocationDao extends MongoDao {
  constructor() {
    super(locationModel);
  }
}
