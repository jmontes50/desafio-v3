import Services from "./class.services.js";

import MovementDao from "../daos/mongodb/movement.dao.js";

export default class MovementServices extends Services {
    constructor() {
        super(new MovementDao())
    }
}