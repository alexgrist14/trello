import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IDashboard } from "../shared/types/dashboard.type";
import { dashboardApi } from "../shared/api/dashboard";
import List from "../shared/ui/List/List";
import * as styles from "./DashboardContent.css";
import { useAppDispatch } from "../shared/store";
import { useSelector } from "react-redux";

const DashboardContent = () => {
  const { id } = useParams();
  const disaptch = useAppDispatch();
  const lists = useSelector((state) => state.lists);
  const [dashboard, setDashboard] = useState<IDashboard | null>(null);

  useEffect(() => {
    if (id) {
      dashboardApi.getById(Number(id)).then((data) => {
        setDashboard(data);
        console.log(data.lists);
      });
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {dashboard?.lists.map((list) => (
        <div className={styles.list} key={list.id}>
          <List title={list.title} tasks={list.tasks} />
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
