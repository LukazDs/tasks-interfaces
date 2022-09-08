import Joi from "joi";
import { CreateTask } from "../services/taskService";

export const taskSchema = Joi.object<CreateTask>({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isDone: Joi.bool(),
});
