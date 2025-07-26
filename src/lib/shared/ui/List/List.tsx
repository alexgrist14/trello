import { type FC } from "react";
import type { ITask } from "../../types/tasks.type";
import Task from "../Task/Task";
import * as styles from "./List.css";
import Button from "../Button/Button";
import { SvgPlus } from "../../svg/SvgPlus";

interface ListProps {
  title: string;
  tasks?: ITask[];
  dashboardId: number;
}

const List: FC<ListProps> = ({ title, tasks, dashboardId }) => {
  console.log(tasks);

  return (
    <div
      // ref={(node) => {
      //   drop(node);
      // }}
      className={styles.container}
    >
      <h3 className={styles.title}>{title}</h3>
      {tasks && tasks.length > 0 ? (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} dashboardId={dashboardId} />
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
      <Button className={styles.addButton}>
        <SvgPlus />
        <p>Add new task</p>
      </Button>
    </div>
  );
};

export default List;
