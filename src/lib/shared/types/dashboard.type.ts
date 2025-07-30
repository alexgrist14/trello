import type { List } from "./lists.type";

export interface Dashboard {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  lists: List[];
}
