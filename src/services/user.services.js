import Services from './class.services.js';
import pkg from "jsonwebtoken";
import "dotenv/config"

import UserDao from "../daos/mongodb/user.dao.js";

const SECRET_KEY = process.env.JWT_SECRET;

const userDao = new UserDao();

export default class UserServices extends Services {
    constructor() {
        super(userDao)
    }

    #generateToken(user) {
      const payload = {
        id: user._id,
      }
      return pkg.sign(payload, SECRET_KEY, { expiresIn: '3m' })
    }

    async register(user) {
      try {
        return await userDao.register(user)
      } catch (error) {
        console.log(error);
      }
    }

    async login(user) {
      const userExists = await userDao.login(user)
      if(userExists) {
        const token = this.#generateToken(userExists)
        return { token, user: userExists }
      }else return false
    }
}