import { useState, type FC } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import { dashboardApi } from "../../../../shared/api/dashboard";
import type { IDashboard } from "../../../../shared/types/dashboard.type";
import * as styles from "./DashboardForm.css";
import { useAppDispatch, useAppSelector } from "../../../../shared/store";
import { DashboardsActions } from "../../../../shared/store/slices/dashboardsSlice";

interface DashboardFormProps {
  dashboard?: IDashboard;
  callback?: (dashboard: IDashboard) => void;
}

const DashboardForm: FC<DashboardFormProps> = ({ dashboard, callback }) => {
  const dispatch = useAppDispatch();
  const { dashboards } = useAppSelector((state) => state.dashboards);
  const [value, setValue] = useState(dashboard?.title || "");

  return (
    <div className={styles.form}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          if (dashboard) {
            dashboardApi.update(dashboard.id, { title: value }).then((dash) => {
              dispatch(
                DashboardsActions.setDashboards(
                  dashboards.map((d) => (d.id === dash.id ? dash : d))
                )
              );

              callback?.(dash);
            });
          } else {
            dashboardApi.create({ title: value }).then((dash) => {
              dispatch(DashboardsActions.setDashboards([...dashboards, dash]));
              callback?.(dash);
            });
          }
        }}
        color="accent"
      >
        {dashboard ? "Update Dashboard" : "Create Dashboard"}
      </Button>
    </div>
  );
};

export default DashboardForm;
