import ClassController from "./class.controller.js";
import LocationServices from "../services/location.services.js";

const locationService = new LocationServices();

export default class LocationController extends ClassController{
  constructor() {
    super(locationService);
  }
}