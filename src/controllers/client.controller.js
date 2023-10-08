import ClassController from "./class.controller.js";
import ClientServices from "../services/client.services.js";
import { createResponse } from "../utils.js";

const clientService = new ClientServices();

export default class ClientController extends ClassController {
  constructor() {
    super(clientService);
  }

  register = async (req, res, next) => {
    try {
      const newClient = await clientService.register(req.body);
      if (!newClient) createResponse(res, 404, "Client already exists");
      else createResponse(res, 200, newClient);
    } catch (error) {
      next(error.message);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await clientService.login(req.body);
      res.header("Authorization", token);
      createResponse(res, 200, token);
    } catch (error) {
      console.error(error);
      next(error.message);
    }
  };

  profile = (req, res, next) => {
    try {
      const { name, email, role } = req.user;
      createResponse(res, 200, {
        name,
        email,
        role,
      });
    } catch (error) {
      console.error(error);
      next(error.message);
    }
  };
}
