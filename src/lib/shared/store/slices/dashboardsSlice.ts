import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IDashboard } from "../../types/dashboard.type";

interface DashboardsState {
  dashboards: IDashboard[];
}

const initialState: DashboardsState = {
  dashboards: [],
};

const dashboardsSlice = createSlice({
  name: "dashboards",
  initialState,
  reducers: {
    setDashboards(state, action: PayloadAction<IDashboard[]>) {
      state.dashboards = action.payload;
    },
    addDashboard(state, action: PayloadAction<IDashboard>) {
      state.dashboards.push(action.payload);
    },
  },
});

export const DashboardsActions = dashboardsSlice.actions;
export default dashboardsSlice.reducer;
