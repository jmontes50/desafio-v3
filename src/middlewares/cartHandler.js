import { createResponse } from "../utils.js";

const checkCartOwner = (req, res, next) => {
  if (req.body.cartId === req.user.cart) {
    return next();
  }
  return createResponse(res, 403, "Forbidden");
};

export default checkCartOwner;
