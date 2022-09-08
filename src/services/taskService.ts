import taskRepository from "../repositories/taskRepository";

export interface ICreateTaskData {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export type CreateTask = Omit<ICreateTaskData, "id">

  async function findAll() {
    const tasks = await taskRepository.findAll();
    return tasks;
  }

async function insert(createTaskData: CreateTask) {
  const existingTask = await taskRepository.findByTitle(createTaskData.title);
  if (existingTask)
    throw { type: "conflict", message: "Tasks must have unique titles" };

  await taskRepository.insert(createTaskData);
}

export default {
  findAll,
  insert,
};
