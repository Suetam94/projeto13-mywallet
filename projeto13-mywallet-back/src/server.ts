import { config } from "dotenv";
import express from "express";

config();
const app = express();

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running at http://localhost:5000")
);
