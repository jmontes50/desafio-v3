import MongoDao from "./mongo.dao.js";
import { storageModel } from "./models/storage.model.js";

export default class StorageDao extends MongoDao {
  constructor() {
    super(storageModel);
  }
}