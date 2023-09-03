import Services from "./class.services.js";

import LocationDao from "../daos/mongodb/location.dao.js";

export default class LocationServices extends Services {
    constructor() {
        super(new LocationDao())
    }
}