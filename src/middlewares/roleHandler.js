import { createResponse } from "../utils.js";

const checkUserRole = (req, res, next) => {
  console.log({ req });
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  return createResponse(res, 403, "Unauthorized");
};

export default checkUserRole;
