import type { ITask } from "./tasks.type";

export interface IList {
  id: number;
  boardId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  tasks: ITask[];
}
