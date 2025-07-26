import type { ITask } from "./tasks.type";

export interface IList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  tasks: ITask[];
}
