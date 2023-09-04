import MongoDao from "./mongo.dao.js";
import { userModel } from "./models/user.model.js";
import { createHash, isValidPassword } from "../../utils.js";

export default class UserDao extends MongoDao {
  constructor() {
    super(userModel);
  }

  async register(user) {
    const { email, password } = user;
    const existUser = await this.getByEmail(email);
    if (!existUser) {
      const newUser = await this.create({
        ...user,
        password: createHash(password),
      });
      if (!newUser) return false;
      else return newUser;
    }else return false;
  }

  async getByEmail(email) {
    const user = await this.model.findOne({ email })
    if(user) return user;
    else return false
  }

  async login(user) {
    const { email, password } = user;
    const userExists = await this.getByEmail(email);
    if (userExists) {
      const passwordValid = isValidPassword(user, password);
      if (!passwordValid) return false
      else return userExists;
    }
  }
}
