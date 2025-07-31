import { type FC } from "react";
import * as styles from "./TaskItem.css";
import { useDrag, useDrop } from "react-dnd";
import type { Task } from "../../types/tasks.type";
import classNames from "classnames";
import { taskApi } from "../../api/tasks";
import { useAppDispatch } from "../../store";
import { listsActions } from "../../store/slices/listsSlice";
import { SvgDesc } from "../../svg/SvgDesc";

interface TaskItemProps {
  onClick?: () => void;
  isHidden?: boolean;
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task, onClick, isHidden }) => {
  const dispatch = useAppDispatch();
  const { title, description } = task;

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "task",
      drop: (data: Task) => {
        if (data.id === task.id) return;

        const oldTask = data;
        const newTask = task;

        dispatch(
          listsActions.reorderTasksInList({
            oldTask,
            newTask,
          })
        );

        taskApi.reorder(data.id, task.taskOrder, task.listId).catch(() => {
          dispatch(
            listsActions.reorderTasksInList({
              oldTask: {
                ...oldTask,
                taskOrder: newTask.taskOrder,
                listId: newTask.listId,
              },
              newTask: {
                ...newTask,
                taskOrder: oldTask.taskOrder,
                listId: oldTask.listId,
              },
            })
          );
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [task]
  );

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "task",
      item: task,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [task]
  );

  return (
    <div
      ref={(node) => {
        drop(node);
      }}
      className={styles.wrapper}
    >
      <div
        className={classNames(
          styles.divider,
          isOver && !isDragging && styles.dividerActive
        )}
      />
      <div
        onClick={onClick}
        ref={(node) => {
          if (!isHidden) {
            drag(node);
          }
        }}
        style={{ cursor: isHidden ? "default" : "pointer" }}
        className={classNames(
          styles.container,
          isHidden && styles.containerVariants.hidden,
          isDragging && styles.containerVariants.dragging,
          isOver && !isDragging && styles.containerVariants.canDrop
        )}
      >
        <h3>{title}</h3>
        {description && <SvgDesc />}
      </div>
    </div>
  );
};

export default TaskItem;
