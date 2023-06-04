import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

import { router } from "./routes/index";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
db().then(() => console.log("Conexion exitosa"));
app.use(router);
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
