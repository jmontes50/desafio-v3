import { connect } from "mongoose";
import "dotenv/config";

try {
  console.log("connection", process.env.MONGO_LOCAL_URL);
  await connect(process.env.MONGO_LOCAL_URL);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(error);
}
