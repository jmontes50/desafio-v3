import express, { json, urlencoded } from "express";
import "./daos/mongodb/connection.js";
import morgan from "morgan";
import MainRouter from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import config from "./config.js";

const app = express();
const mainRouter = new MainRouter();

app
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(morgan("dev"))

  .use("/api", mainRouter.getRouter())
  .use(errorHandler);

const PORT = config.PORT || 8080;

app.listen(PORT, () => console.info(`SERVER UP ON PORT ${PORT}`));
