import { createSlice } from "@reduxjs/toolkit";
import type { IList } from "../../types/lists.type";

interface ListsInitialStateType {
  lists: IList[];
}

const initialState: ListsInitialStateType = {
  lists: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setLists: 
    incrementNumber: (state) => {
      state.currentNumber += 1;
    },
    decrementNumber: (state) => {
      state.currentNumber -= 1;
    },
    incrementUserValue: (state, action) => {
      state.currentNumber += action.payload;
    },
    decrementUserValue: (state, action) => {
      state.currentNumber -= action.payload;
    },
  },
});

export const TasksServices = {
  actions: tasksSlice.actions,
};

const IncDecReducer = tasksSlice.reducer;
export default IncDecReducer;
