import { type FC } from "react";
import * as styles from "./Task.css";
import { useDrag, useDrop } from "react-dnd";
import type { ITask } from "../../types/tasks.type";
import classNames from "classnames";
import { taskApi } from "../../api/tasks";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const { id, title, taskOrder } = task;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (data: Pick<ITask, "id">) => {
      console.log(data.id, task.taskOrder);
      taskApi.reorder(data.id, task.taskOrder);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { title, id, taskOrder },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={(node) => {
        drag(node);
        drop(node);
      }}
      className={classNames(
        styles.container,
        isDragging && styles.containerVariants.dragging,
        isOver && !isDragging && styles.containerVariants.canDrop
      )}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Task;
