import type { IList } from "./lists.type";

export interface IDashboard {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  lists: IList[];
}
