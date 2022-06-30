import cors from "cors";
import { config } from "dotenv";
import express from "express";

import { Conn } from "./database/conn";
import { router } from "./routes";

config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

Conn()
  .then(() => console.log("MongoDB is connected"))
  .catch(() => () => console.log("MongoDB is not connected"));

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running at http://localhost:5000")
);
