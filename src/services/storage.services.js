import Services from "./class.services.js";

import StorageDao from "../daos/mongodb/storage.dao.js";

const storageDao = new StorageDao();

export default class StorageServices extends Services {
    constructor() {
        super(storageDao  )
    }
}