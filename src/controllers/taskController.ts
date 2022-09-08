import { Request, Response } from "express";
import taskService, { ICreateTaskData } from "../services/taskService";

export async function get(req: Request, res: Response) {
  const tasks = await taskService.findAll();

  res.send(tasks);
}

export async function create(req: Request, res: Response) {
  const task: ICreateTaskData = req.body;

  await taskService.insert(task);

  res.sendStatus(201);
}
