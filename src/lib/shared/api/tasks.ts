import axios from "axios";
import { API_URL } from "../constants/common";
import type { Task } from "../types/tasks.type";

const create = async (listId: number, data: { title: string }) => {
  const response = await axios.post<Task>(
    `${API_URL}/lists/${listId}/tasks`,
    data
  );
  return response.data;
};

const update = async (
  id: number,
  data: { title: string; description?: string }
) => {
  const response = await axios.patch<Task>(`${API_URL}/tasks/${id}`, data);
  return response.data;
};

const remove = async (id: number) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};

const reorder = async (id: number, newOrder: number, newListId: number) => {
  const response = await axios.put<Task[]>(`${API_URL}/tasks/${id}`, {
    newOrder,
    newListId,
  });
  return response.data;
};

export const taskApi = {
  create,
  update,
  remove,
  reorder,
};
