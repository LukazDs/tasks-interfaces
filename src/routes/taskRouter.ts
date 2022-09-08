import { Router } from "express";
import * as taskController from "../controllers/taskController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { taskSchema } from "../schemas/taskSchema";

const taskRouter = Router();
taskRouter.get("/tasks", taskController.get);
taskRouter.post(
  "/tasks",
  validateSchemaMiddleware(taskSchema),
  taskController.create
);

export default taskRouter;
