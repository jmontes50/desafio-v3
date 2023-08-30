import express, { json, urlencoded } from "express";
import "./daos/mongodb/connection.js";
import morgan from "morgan";
import "dotenv/config";

const app = express();

app
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
