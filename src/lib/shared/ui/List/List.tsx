import { useState, type FC } from "react";
import type { ITask } from "../../types/tasks.type";
import Task from "../Task/Task";
import * as styles from "./List.css";
import Button from "../Button/Button";
import { SvgPlus } from "../../svg/SvgPlus";
import type { IList } from "../../types/lists.type";
import TaskForm from "../../../features/task/ui/TaskForm/TaskForm";
import { useAppSelector } from "../../store";
import { Loader } from "../Loader";
import { Modal } from "../Modal/Modal";
import classNames from "classnames";

const List: FC<IList> = ({ id, title, tasks, boardId }) => {
  const { isLoading } = useAppSelector((state) => state.lists);
  const [isModalActive, setIsModalActive] = useState(false);
  const [task, setTask] = useState<ITask>();

  return (
    <div className={classNames(styles.container, isLoading && styles.disabled)}>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
        <TaskForm
          task={task}
          listId={id}
          callback={() => {
            setIsModalActive(false);
          }}
        />
      </Modal>
      <h3 className={styles.title}>{title}</h3>
      {isLoading && <Loader />}
      {tasks && (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <Task
              onClick={() => {
                setTask(task);
                setIsModalActive(true);
              }}
              key={task.id}
              task={task}
              dashboardId={boardId}
            />
          ))}
        </ul>
      )}
      <Button
        className={styles.addButton}
        onClick={() => {
          setTask(undefined);
          setIsModalActive(true);
        }}
        color="accent"
      >
        <SvgPlus />
        <p>Add new task</p>
      </Button>
    </div>
  );
};

export default List;
