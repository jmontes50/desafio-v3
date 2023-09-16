import ClassController from "./class.controller.js";
import MovementServices from "../services/movement.services.js";

const movementService = new MovementServices();

export default class MovementController extends ClassController {
  constructor() {
    super(movementService);
  }
}
