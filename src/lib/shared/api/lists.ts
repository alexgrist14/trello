import axios from "axios";
import { API_URL } from "../constants/common";

const create = async (boardId: number, data: { title: string }) => {
  const response = await axios.post(`${API_URL}/lists/${boardId}`, data);
  return response.data;
};

const update = async (id: number, data: { title: string }) => {
  const response = await axios.patch(`${API_URL}/lists/${id}`, data);
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
