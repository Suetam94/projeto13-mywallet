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

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errosMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errosMessage,
    stack: err.stack,
  });
});

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running at http://localhost:5000")
);
