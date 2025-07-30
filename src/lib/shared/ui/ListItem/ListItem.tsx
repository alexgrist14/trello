import { useState, type FC } from "react";
import type { Task } from "../../types/tasks.type";
import TaskItem from "../TaskItem/TaskItem";
import * as styles from "./ListItem.css";
import Button from "../Button/Button";
import { SvgPlus } from "../../svg/SvgPlus";
import type { List } from "../../types/lists.type";
import TaskForm from "../../../features/task/ui/TaskForm/TaskForm";
import { Modal } from "../Modal/Modal";

const ListItem: FC<List> = ({ id, title, tasks }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [task, setTask] = useState<Task>();

  return (
    <div className={styles.container}>
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
      {tasks && (
        <ul className={styles.list}>
          {tasks.map((task, i) => (
            <TaskItem
              onClick={() => {
                setTask(task);
                setIsModalActive(true);
              }}
              key={`${task.id} + ${i}`}
              task={task}
            />
          ))}
          <TaskItem
            isHidden
            task={{
              id: -1,
              title: "",
              description: "",
              listId: id,
              taskOrder: tasks.length + 1,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }}
          />
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

export default ListItem;
