import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { Link, useParams } from "react-router";
import { dashboardApi } from "../shared/api/dashboard";
import ListItem from "../shared/ui/ListItem/ListItem";
import * as styles from "./DashboardContent.css";
import { useAppDispatch, useAppSelector } from "../shared/store";
import { listsActions } from "../shared/store/slices/listsSlice";
import Button from "../shared/ui/Button/Button";
import { SvgPlus } from "../shared/svg/SvgPlus";
import { Modal } from "../shared/ui/Modal/Modal";
import ListForm from "../features/list/ui/ListForm/ListForm";
import type { List } from "../shared/types/lists.type";
import { SvgTrash } from "../shared/svg/SvgTrash";
import { SvgPen } from "../shared/svg/SvgPen";
import { listApi } from "../shared/api/lists";
import LogsPanel from "../features/dashboard/ui/LogsPanel/LogsPanel";
import { Loader } from "../shared/ui/Loader";
import useCloseEvents from "../shared/hooks/useCloseEvents";
import ConfirmForm from "../shared/ui/ConfirmForm/ConfirmForm";

const DashboardContent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { lists } = useAppSelector((state) => state.lists);
  const [isActivityActive, setIsActivityActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [list, setList] = useState<List>();
  const logsRef = useRef<HTMLDivElement>(null);
  const activityButtonRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const isExists = useMemo(() => {
    return !id || lists?.some((list) => list.boardId === +id);
  }, [lists, id]);

  useCloseEvents([logsRef, activityButtonRef], () => {
    setIsActivityActive(false);
  });

  useEffect(() => {
    if (id && !isExists) {
      dashboardApi
        .getById(Number(id))
        .then((data) => {
          dispatch(listsActions.setLists(data.lists));
        })
        .finally(() => {
          setIsFirstRender(false);
        });
    } else {
      setIsFirstRender(false);
    }
  }, [dispatch, id, isExists]);

  const handleDeleteList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (list) {
      listApi.remove(list.id).then(() => {
        dispatch(listsActions.setLists(lists.filter((l) => l.id !== list.id)));
      });
    }
    setIsConfirmActive(false);
  };

  if (isFirstRender || !id) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
        <ListForm
          list={list}
          boardId={+id}
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
          message={`Are you sure you want to delete the list "${list?.title}"?`}
          onConfirm={handleDeleteList}
          onCancel={() => setIsConfirmActive(false)}
        />
      </Modal>
      <div className={styles.buttons}>
        <Link to={"/"}>
          <Button className={styles.addListButton}>Back to dashboards</Button>
        </Link>
        <div ref={activityButtonRef}>
          <Button
            className={styles.addListButton}
            onClick={() => setIsActivityActive(!isActivityActive)}
          >
            Activity
          </Button>
        </div>
      </div>
      <div className={styles.container}>
        {lists ? (
          lists.map((list) => (
            <div className={styles.list} key={list.id}>
              <Button
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  zIndex: 1,
                }}
                isOnlyIcon
                onClick={(e) => {
                  e.preventDefault();
                  setList(list);
                  setIsConfirmActive(true);
                }}
                color="danger"
              >
                <SvgTrash />
              </Button>
              <Button
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "32px",
                  zIndex: 1,
                }}
                isOnlyIcon
                onClick={(e) => {
                  e.preventDefault();
                  setList(list);
                  setIsModalActive(true);
                }}
                color="edit"
              >
                <SvgPen />
              </Button>
              <ListItem {...list} />
            </div>
          ))
        ) : (
          <Loader />
        )}
        <Button
          color="primary"
          className={styles.addListButton}
          onClick={() => {
            setList(undefined);
            setIsModalActive(true);
          }}
        >
          <SvgPlus />
          <p>Add list</p>
        </Button>
      </div>
      <LogsPanel
        ref={logsRef}
        isActive={isActivityActive}
        boardId={Number(id)}
      />
    </div>
  );
};

export default DashboardContent;
