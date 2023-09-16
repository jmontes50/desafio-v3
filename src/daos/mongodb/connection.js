import { connect } from "mongoose";
import config from "../../config.js";

try {
  console.log("connection", config.MONGO_LOCAL_URL);
  await connect(config.MONGO_LOCAL_URL);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(error);
}
