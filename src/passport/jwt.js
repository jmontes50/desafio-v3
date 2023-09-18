import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserDao from "../daos/mongodb/user.dao.js";
import config from "../config.js";

const userDao = new UserDao();
/*
const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY_JWT,
};

const verifyToken = async (payload, done) => {
  console.info("payload", payload);
  const user = await userDao.getUserByEmail(payload.email);
  if (user) return done(null, user);
  return done(null, false);
};

passport.use(new JwtStrategy(strategyOptions, verifyToken));
*/

const verifyToken = async (payload, done) => {
  console.info("jwt VerifyToken", payload);
  const user = await userDao.getUserByEmail(payload.email);
  console.info("jwt VerifyToken user", user);
  if (user) return done(null, user);
  return done(null, false);
};

const cookieExtractor = (req) => {
  console.info("req.cookies", req.cookies);
  const { token } = req.cookies;
  console.info("token: ", token);
  return token;
};

const strategyOptionsWithCookies = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: config.SECRET_KEY_JWT,
};

passport.use(
  "jwtCookies",
  new JwtStrategy(strategyOptionsWithCookies, verifyToken),
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userDao.getById(id);
  return done(null, user);
});
