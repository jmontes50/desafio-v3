import Services from "./class.services.js";

import MovementDao from "../daos/mongodb/movement.dao.js";

const movementDao = new MovementDao()

export default class MovementServices extends Services {
    constructor() {
        super(movementDao)
    }
}