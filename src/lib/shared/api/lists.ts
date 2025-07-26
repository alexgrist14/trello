import axios from "axios";
import { API_URL } from "../constants/common";
import type { IList } from "../types/lists.type";

const create = async (boardId: number, data: { title: string }) => {
  const response = await axios.post<IList>(`${API_URL}/lists/${boardId}`, data);
  return response.data;
};

const update = async (id: number, data: { title: string }) => {
  const response = await axios.patch<IList>(`${API_URL}/lists/${id}`, data);
  return response.data;
};

const remove = async (id: number) => {
  const response = await axios.delete(`${API_URL}/lists/${id}`);
  return response.data;
};

export const listApi = {
  create,
  update,
  remove,
};
