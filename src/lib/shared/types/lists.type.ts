import type { Task } from "./tasks.type";

export interface List {
  id: number;
  boardId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}
