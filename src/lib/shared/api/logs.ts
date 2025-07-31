import axios from "axios";
import { API_URL } from "../constants/common";
import type { Log } from "../types/log.type";

export const getLogsByBoard = async (boardId: number) => {
  const response = await axios.get<Log[]>(`${API_URL}/logs/${boardId}`);
  return response.data;
};
