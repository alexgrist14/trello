import { useEffect, useState, type MouseEvent } from "react";
import { dashboardApi } from "../../../shared/api/dashboard";
import type { Dashboard } from "../../../shared/types/dashboard.type";
import Button from "../../../shared/ui/Button/Button";
import * as styles from "./DashboardsList.css";
import { useAppDispatch, useAppSelector } from "../../../shared/store";
import { DashboardsActions } from "../../../shared/store/slices/dashboardsSlice";
import { SvgTrash } from "../../../shared/svg/SvgTrash";
import { Modal } from "../../../shared/ui/Modal/Modal";
import DashboardForm from "../../../features/dashboard/ui/DashboardForm/DashboardForm";
import { SvgPen } from "../../../shared/svg/SvgPen";
import { Link } from "react-router";
import ConfirmForm from "../../../shared/ui/ConfirmForm/ConfirmForm";

const DashboardsList = () => {
  const dispatch = useAppDispatch();
  const { dashboards } = useAppSelector((state) => state.dashboards);

  const [isModalActive, setIsModalActive] = useState(false);
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const [dashboard, setDashboard] = useState<Dashboard>();

  useEffect(() => {
    if (dashboards !== undefined && dashboards.length === 0) {
      dashboardApi.getAll().then((data) => {
        dispatch(DashboardsActions.setDashboards(data));
      });
    }
  }, [dispatch, dashboards]);

  const handleDeleteDashboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (dashboard) {
      dashboardApi.remove(dashboard.id).then(() => {
        dispatch(
          DashboardsActions.setDashboards(
            dashboards.filter((d) => d.id !== dashboard.id)
          )
        );
      });
    }
    setIsConfirmActive(false);
  };

  return (
    <div className={styles.list}>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
        <DashboardForm
          dashboard={dashboard}
          callback={() => {
            setIsModalActive(false);
          }}
        />
      </Modal>
      <Modal
        isActive={isConfirmActive}
        onClose={() => setIsConfirmActive(false)}
      >
        <ConfirmForm
          message={`Are you sure you want to delete the dashboard "${dashboard?.title}"?`}
          onConfirm={handleDeleteDashboard}
          onCancel={() => setIsConfirmActive(false)}
        />
      </Modal>
      <div className={styles.cards}>
        {dashboards.map((dashboard, i) => (
          <Link
            key={`${dashboard.id} + ${i}`}
            to={`/dashboard/${dashboard.id}`}
          >
            <div key={dashboard.id} className={styles.card}>
              <h3>{dashboard.title}</h3>
              <Button
                style={{ position: "absolute", top: "5px", right: "5px" }}
                isOnlyIcon
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(dashboard);
                  setIsConfirmActive(true);
                }}
                color="danger"
              >
                <SvgTrash />
              </Button>
              <Button
                style={{ position: "absolute", top: "5px", right: "32px" }}
                isOnlyIcon
                onClick={(e) => {
                  e.preventDefault();
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
