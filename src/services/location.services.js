import Services from "./class.services.js";

import LocationDao from "../daos/mongodb/location.dao.js";

const locationDao = new LocationDao();

export default class LocationServices extends Services {
  constructor() {
    super(locationDao);
  }
}
