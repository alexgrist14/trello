import { useEffect, useState } from "react";
import { dashboardApi } from "../../../shared/api/dashboard";
import type { IDashboard } from "../../../shared/types/dashboard.type";
import Button from "../../../shared/ui/Button/Button";
import * as styles from "./DashboardsList.css";
import { useAppDispatch } from "../../../shared/store";
import { DashboardsActions } from "../../../shared/store/slices/dashboardsSlice";
import { SvgTrash } from "../../../shared/svg/SvgTrash";
import { Modal } from "../../../shared/ui/Modal/Modal";
import DashboardForm from "../../../features/dashboard/ui/DashboardForm/DashboardForm";
import { SvgPen } from "../../../shared/svg/SvgPen";
import { Link } from "react-router";

const DashboardsList = () => {
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const [dashboard, setDashboard] = useState<IDashboard>();
  const [dashboards, setDashboards] = useState<IDashboard[]>([]);

  useEffect(() => {
    dashboardApi.getAll().then((data) => {
      setDashboards(data);
      dispatch(DashboardsActions.setDashboards(data));
    });
  }, [dispatch]);

  return (
    <div className={styles.list}>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
        <DashboardForm
          dashboard={dashboard}
          setDashboards={setDashboards}
          callback={() => {
            setIsModalActive(false);
          }}
        />
      </Modal>
      <div className={styles.cards}>
        {dashboards.map((dashboard) => (
          <Link to={`/dashboard/${dashboard.id}`}>
            <div key={dashboard.id} className={styles.card}>
              <h3>{dashboard.title}</h3>
              <Button
                style={{ position: "absolute", top: "5px", right: "5px" }}
                isOnlyIcon
                onClick={() => {
                  dashboardApi.remove(dashboard.id).then(() => {
                    setDashboards(
                      dashboards.filter((d) => d.id !== dashboard.id)
                    );
                  });
                }}
                color="danger"
              >
                <SvgTrash />
              </Button>
              <Button
                style={{ position: "absolute", top: "5px", right: "32px" }}
                isOnlyIcon
                onClick={() => {
                  setDashboard(dashboard);
                  setIsModalActive(true);
                }}
                color="edit"
              >
                <SvgPen />
              </Button>
            </div>
          </Link>
        ))}
        <Button
          className={styles.card}
          onClick={() => {
            setDashboard(undefined);
            setIsModalActive(true);
          }}
          color="accent"
        >
          Add Dashboard
        </Button>
      </div>
    </div>
  );
};

export default DashboardsList;
