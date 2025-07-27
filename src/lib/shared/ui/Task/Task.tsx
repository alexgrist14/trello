import { type FC } from "react";
import * as styles from "./Task.css";
import { useDrag, useDrop } from "react-dnd";
import type { ITask } from "../../types/tasks.type";
import classNames from "classnames";
import { taskApi } from "../../api/tasks";
import { useAppDispatch } from "../../store";
import { listsActions } from "../../store/slices/listsSlice";
import { dashboardApi } from "../../api/dashboard";
import { SvgDesc } from "../../svg/SvgDesc";

interface TaskProps {
  onClick?: () => void;
  dashboardId: number;
  task: ITask;
}

const Task: FC<TaskProps> = ({ task, dashboardId, onClick }) => {
  const dispatch = useAppDispatch();
  const { id, title, taskOrder, listId, description } = task;

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "task",
      drop: (data: Pick<ITask, "id" | "listId">) => {
        if (data.id === task.id) return;

        dispatch(listsActions.setIsLoading(true));

        taskApi.reorder(data.id, task.taskOrder, task.listId).then(() => {
          dashboardApi.getById(dashboardId).then((board) => {
            dispatch(listsActions.setIsLoading(false));
            dispatch(listsActions.setLists(board.lists));
          });
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
      item: { title, id, taskOrder, listId },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [task]
  );

  return (
    <div
      onClick={onClick}
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
      {description && <SvgDesc />}
    </div>
  );
};

export default Task;
