import ClassController from "./class.controller.js";
import UserServices from "../services/user.services.js";
import { createResponse } from "../utils.js";
import generateToken from "../jwt/auth.js";

const userService = new UserServices();

export default class UserController extends ClassController {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
      const newUser = await userService.register(req.body);
      if (!newUser) createResponse(res, 404, "User already exists");
      else createResponse(res, 200, newUser);
    } catch (error) {
      next(error.message);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await userService.login(req.body);
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
