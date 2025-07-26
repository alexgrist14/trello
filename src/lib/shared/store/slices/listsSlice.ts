import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IList } from "../../types/lists.type";
import type { ITask } from "../../types/tasks.type";

interface ListsInitialStateType {
  lists: IList[];
}

const initialState: ListsInitialStateType = {
  lists: [],
};

const listsSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setLists: (state, action: PayloadAction<IList[]>) => {
      state.lists = action.payload;
    },
    updateList: (state, action: PayloadAction<Partial<IList>>) => {
      const index = state.lists.findIndex(
        (list) => list.id === action.payload.id
      );
      if (index !== -1) {
        state.lists[index] = { ...state.lists[index], ...action.payload };
      }
    },
    updateTaskInList: (state, action: PayloadAction<ITask>) => {
      const { id, listId } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      if (listIndex !== -1) {
        const taskIndex = state.lists[listIndex].tasks.findIndex(
          (task) => task.id === id
        );
        console.log(taskIndex);
        if (taskIndex !== -1) {
          console.log(action.payload);
          state.lists[listIndex].tasks[taskIndex] = action.payload;
        }
      }
    },
    addList: (state, action: PayloadAction<IList>) => {
      state.lists.push(action.payload);
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});
export const listsActions = listsSlice.actions;

const listsReducer = listsSlice.reducer;
export default listsReducer;
