import { connection } from "../database";
import { CreateTask } from "../services/taskService";

async function findAll() {
  //any
  const { rows } = await connection.query<[]>("SELECT * FROM tasks");
  return rows;
}

async function findByTitle(title: string) {
  //any
  const { rows } = await connection.query<[]>(
    "SELECT * FROM tasks WHERE title=$1",
    [title]
  );
  return rows[0];
}

async function insert(createTaskData: CreateTask) {
  await connection.query(
    `
    INSERT INTO tasks (title, description, "isDone") VALUES ($1, $2, $3);
  `,
    [createTaskData.title, createTaskData.description, createTaskData.isDone]
  );
}

export default {
  findAll,
  findByTitle,
  insert,
};
