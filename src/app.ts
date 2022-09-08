import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import taskRouter from "./routes/taskRouter";

dotenv.config()

const app = express();
app.use(json());
app.use(cors());
app.use(taskRouter);
app.use(errorHandlerMiddleware);

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
