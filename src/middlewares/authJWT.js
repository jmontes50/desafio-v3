/* eslint-disable complexity */
/* No se como reducir la complejidad aqui */

import pkg from "jsonwebtoken";
import UserDao from "../daos/mongodb/user.dao.js";
import "dotenv/config";
import { createResponse } from "../utils.js";

const userDao = new UserDao();
const { verify } = pkg;
const SECRET_KEY = process.env.SECRET_KEY_JWT;

const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) return createResponse(res, 401, "Unauthorized");
    const token = authHeader.split(" ")[1];
    const decode = verify(token, SECRET_KEY);
    const user = await userDao.getById(decode.userId);
    if (!user) return createResponse(res, 401, "Unauthorized");
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return createResponse(res, 401, "Unauthorized");
  }
};

export default checkAuth;
