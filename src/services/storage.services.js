import Services from "./class.services.js";

import StorageDao from "../daos/mongodb/storage.dao.js";

export default class StorageServices extends Services {
    constructor() {
        super(new StorageDao())
    }
}