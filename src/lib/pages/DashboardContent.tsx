import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { dashboardApi } from "../shared/api/dashboard";
import List from "../shared/ui/List/List";
import * as styles from "./DashboardContent.css";
import { useAppDispatch, useAppSelector } from "../shared/store";
import { listsActions } from "../shared/store/slices/listsSlice";
import Button from "../shared/ui/Button/Button";
import { SvgPlus } from "../shared/svg/SvgPlus";
import type { IDashboard } from "../shared/types/dashboard.type";

const DashboardContent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { lists } = useAppSelector((state) => state.lists);

  const [dashboard, setDashboard] = useState<IDashboard | null>(null);

  useEffect(() => {
    if (id) {
      dashboardApi.getById(Number(id)).then((data) => {
        setDashboard(data);
        dispatch(listsActions.setLists(data.lists));
      });
    }
  }, [dispatch, id]);
  if (!dashboard) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {lists.map((list) => (
        <div className={styles.list} key={list.id}>
          <List
            title={list.title}
            tasks={list.tasks}
            dashboardId={dashboard.id}
          />
        </div>
      ))}
      <Button color="primary" className={styles.addListButton}>
        <SvgPlus />
        <p>Add another list</p>
      </Button>
    </div>
  );
};

export default DashboardContent;
