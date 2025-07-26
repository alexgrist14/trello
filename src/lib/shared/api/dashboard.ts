import axios from "axios";
import { API_URL } from "../constants/common";

const getAll = async () => {
  const response = await axios.get(`${API_URL}/boards`);
  return response.data;
};

const getById = async (id: number) => {
  const response = await axios.get(`${API_URL}/boards/${id}`);
  return response.data;
};

const create = async (data: { title: string }) => {
  const response = await axios.post(`${API_URL}/boards`, data);
  return response.data;
};

const update = async (id: number, data: { title: string }) => {
  const response = await axios.patch(`${API_URL}/boards/${id}`, data);

  return response.data;
};

const remove = async (id: number) => {
  const response = await axios.delete(`${API_URL}/boards/${id}`);
  return response.data;
};

export const dashboardApi = {
  getAll,
  getById,
  create,
  update,
  remove,
};
