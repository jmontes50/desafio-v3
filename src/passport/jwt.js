import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserDao from "../daos/mongodb/user.dao.js";
import config from "../config.js";

const userDao = new UserDao();

const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY_JWT,
};

const verifyToken = async (payload, done) => {
  console.info("payload", payload);
  const user = await userDao.getUserByEmail(payload.email);
};