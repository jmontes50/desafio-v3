import ClassController from "./class.controller.js";
import ClientServices from "../services/client.services.js";

const clientService = new ClientServices();

export default class ClientController extends ClassController{
  constructor() {
    super(clientService);
  }
}