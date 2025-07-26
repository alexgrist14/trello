import axios from "axios";
import { API_URL } from "../constants/common";

const create = async (listId: number, data: { title: string }) => {
  const response = await axios.post(`${API_URL}/lists/${listId}/tasks`, data);
  return response.data;
};

const update = async (id: number, data: { title: string }) => {
  const response = await axios.patch(`${API_URL}/tasks/${id}`, data);
  return response.data;
};

const remove = async (id: number) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};

const reorder = async (id: number, newOrder: number) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, {
    newOrder,
  });
  return response.data;
};

export const taskApi = {
  create,
  update,
  remove,
  reorder,
};
