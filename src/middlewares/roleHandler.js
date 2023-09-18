import { createResponse } from "../utils.js";

const checkUserRole = (role) => (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === role) {
    return next();
  }
  return createResponse(res, 403, "Unauthorized");
};

export const checkAdminRole = checkUserRole("admin");

export const checkUserRoleRegular = checkUserRole("user");
