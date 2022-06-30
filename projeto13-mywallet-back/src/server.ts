import { config } from "dotenv";
import express from "express";

import { Conn } from "./database/conn";

config();
const app = express();

Conn().then(() => console.log("MongoDB is connected"));

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running at http://localhost:5000")
);
