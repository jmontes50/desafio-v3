import Services from "./class.services.js";

import ClientDao from "../daos/mongodb/client.dao.js";

export default class ClientServices extends Services {
    constructor() {
        super(new ClientDao())
    }
}