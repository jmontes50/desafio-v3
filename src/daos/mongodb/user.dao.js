import MongoDao from "./mongo.dao.js";
import { userModel } from "./models/user.model.js";

export default class UserDao extends MongoDao {
  constructor() {
    super(userModel);
  }
}