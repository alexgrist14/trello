import { useCallback, type FC, type FormEvent } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import { dashboardApi } from "../../../../shared/api/dashboard";
import type { Dashboard } from "../../../../shared/types/dashboard.type";
import * as styles from "./DashboardForm.css";
import { useAppDispatch, useAppSelector } from "../../../../shared/store";
import { DashboardsActions } from "../../../../shared/store/slices/dashboardsSlice";

interface DashboardFormProps {
  dashboard?: Dashboard;
  callback?: (dashboard: Dashboard) => void;
}

const DashboardForm: FC<DashboardFormProps> = ({ dashboard, callback }) => {
  const dispatch = useAppDispatch();
  const { dashboards } = useAppSelector((state) => state.dashboards);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData(e.target as HTMLFormElement);
      const title = data.get("title") as string;

      if (dashboard) {
        dashboardApi.update(dashboard.id, { title }).then((dash) => {
          dispatch(
            DashboardsActions.setDashboards(
              dashboards.map((d) => (d.id === dash.id ? dash : d))
            )
          );

          callback?.(dash);
        });
      } else {
        dashboardApi.create({ title }).then((dash) => {
          dispatch(DashboardsActions.setDashboards([...dashboards, dash]));
          callback?.(dash);
        });
      }
    },
    [callback, dashboard, dashboards, dispatch]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        name="title"
        defaultValue={dashboard?.title || ""}
        autoFocus
        required
      />
      {dashboard ? (
        <Button color="accent">Update Dashboard</Button>
      ) : (
        <Button color="accent">Create Dashboard</Button>
      )}
    </form>
  );
};

export default DashboardForm;
