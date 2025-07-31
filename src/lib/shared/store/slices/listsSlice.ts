import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { List } from "../../types/lists.type";
import type { Task } from "../../types/tasks.type";

interface ListsInitialStateType {
  lists: List[];
  isLoading?: boolean;
}

const initialState: ListsInitialStateType = {
  lists: [],
};

const listsSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLists: (state, action: PayloadAction<List[]>) => {
      state.lists = action.payload;
    },
    updateList: (state, action: PayloadAction<Partial<List>>) => {
      const index = state.lists.findIndex(
        (list) => list.id === action.payload.id
      );
      if (index !== -1) {
        state.lists[index] = { ...state.lists[index], ...action.payload };
      }
    },
    addTaskToList: (state, action: PayloadAction<Task>) => {
      const { listId } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      if (listIndex !== -1) {
        const list = state.lists[listIndex];
        if (list.tasks) {
          list.tasks.push(action.payload);
        } else {
          list.tasks = [action.payload];
        }
      }
    },
    updateTaskInList: (state, action: PayloadAction<Task>) => {
      const { id, listId } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      if (listIndex !== -1) {
        const taskIndex = state.lists[listIndex].tasks.findIndex(
          (task) => task.id === id
        );
        if (taskIndex !== -1) {
          state.lists[listIndex].tasks[taskIndex] = action.payload;
        }
      }
    },
    reorderTasksInList: (
      state,
      action: PayloadAction<{
        newTask: Task;
        oldTask: Task;
      }>
    ) => {
      const { newTask, oldTask } = action.payload;

      const listIndex = state.lists.findIndex(
        (list) => list.id === newTask.listId
      );
      const oldListIndex = state.lists.findIndex(
        (list) => list.id === oldTask.listId
      );

      if (listIndex !== -1) {
        const list = state.lists[listIndex];
        const oldList = state.lists[oldListIndex];

        const tasks = state.lists[listIndex].tasks;
        const oldTasks = state.lists[oldListIndex].tasks;

        oldTasks.splice(oldTask.taskOrder - 1, 1);
        tasks.splice(newTask.taskOrder - 1, 0, {
          ...oldTask,
          listId: newTask.listId,
        });

        list.tasks = tasks.map((t, i) => ({
          ...t,
          taskOrder: i + 1,
        }));

        if (list.id !== oldList.id) {
          oldList.tasks = oldTasks.map((t, i) => ({
            ...t,
            taskOrder: i + 1,
          }));
        }
      }
    },
    removeTaskFromList: (state, action: PayloadAction<Task>) => {
      const { id, listId } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      if (listIndex !== -1) {
        state.lists[listIndex].tasks = state.lists[listIndex].tasks.filter(
          (task) => task.id !== id
        );
      }
    },
    addList: (state, action: PayloadAction<List>) => {
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
