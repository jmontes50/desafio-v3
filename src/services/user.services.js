import Services from './class.services.js';
import { pkg } from "jsonwebtoken";
import "dotenv/config"

import UserDao from "../daos/mongodb/user.dao.js";

const SECRET_KEY = process.env.JWT_SECRET;

export default class UserServices extends Services {
    constructor() {
        super(new UserDao())
    }

    #generateToken(user) {
      const payload = {
        id: user._id,
      }
      return pkg.sign(payload, SECRET_KEY, { expiresIn: '3m' })
    }

    async register(user) {
     return await UserDao.register(user)
    }

    async login(user) {
      const userExists = await UserDao.login(user)
      if(userExists) {
        const token = this.#generateToken(userExists)
        return { token, user: userExists }
      }else return false
    }
}