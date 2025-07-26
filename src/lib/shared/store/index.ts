import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dashboardsReducer from "./slices/dashboardsSlice";

const store = configureStore({
  reducer: {
    dashboards: dashboardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
