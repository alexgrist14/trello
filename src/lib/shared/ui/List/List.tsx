import { type FC } from "react";
import type { ITask } from "../../types/tasks.type";
import Task from "../Task/Task";
import * as styles from "./List.css";

interface ListProps {
  title: string;
  tasks?: ITask[];
}

const List: FC<ListProps> = ({ title, tasks }) => {
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
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default List;
