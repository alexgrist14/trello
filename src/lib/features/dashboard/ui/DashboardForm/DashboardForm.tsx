import { useState, type Dispatch, type SetStateAction } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import { dashboardApi } from "../../../../shared/api/dashboard";
import type { IDashboard } from "../../../../shared/types/dashboard.type";
import * as styles from "./DashboardForm.css";

type Props = {
  dashboard?: IDashboard;
  setDashboards: Dispatch<SetStateAction<IDashboard[]>>;
  callback?: (dashboard: IDashboard) => void;
};

const DashboardForm = ({ dashboard, callback, setDashboards }: Props) => {
  const [value, setValue] = useState(dashboard?.title || "");

  return (
    <div className={styles.form}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          if (dashboard) {
            dashboardApi.update(dashboard.id, { title: value }).then((dash) => {
              setDashboards((dashboards) =>
                dashboards.map((d) => (d.id === dash.id ? dash : d))
              );
              callback?.(dash);
            });
          } else {
            dashboardApi.create({ title: value }).then((dash) => {
              setDashboards((dashboards) => [...dashboards, dash]);
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
