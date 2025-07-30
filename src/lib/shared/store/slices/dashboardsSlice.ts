import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Dashboard } from "../../types/dashboard.type";

interface DashboardsState {
  dashboards: Dashboard[];
}

const initialState: DashboardsState = {
  dashboards: [],
};

const dashboardsSlice = createSlice({
  name: "dashboards",
  initialState,
  reducers: {
    setDashboards(state, action: PayloadAction<Dashboard[]>) {
      state.dashboards = action.payload;
    },
    addDashboard(state, action: PayloadAction<Dashboard>) {
      state.dashboards.push(action.payload);
    },
  },
});

export const DashboardsActions = dashboardsSlice.actions;
export default dashboardsSlice.reducer;
