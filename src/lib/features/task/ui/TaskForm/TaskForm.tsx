import { useState, type FC } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import * as styles from "./TaskForm.css";
import type { ITask } from "../../../../shared/types/tasks.type";
import { taskApi } from "../../../../shared/api/tasks";
import { useAppDispatch } from "../../../../shared/store";
import { listsActions } from "../../../../shared/store/slices/listsSlice";
import { Textarea } from "../../../../shared/ui/Textarea";

interface TaskFormProps {
  task?: ITask;
  callback?: (task: ITask) => void;
  listId: number;
}

const TaskForm: FC<TaskFormProps> = ({ task, callback, listId }) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(task?.title || "");
  const [desc, setDesc] = useState(task?.description || "");

  return (
    <div className={styles.form}>
      <div className={styles.inputs}>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        {!!task && (
          <Textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            resize
          />
        )}
      </div>
      <div
        className={styles.buttons}
        style={{ gridTemplateColumns: task ? "1fr 1fr" : "1fr" }}
      >
        <Button
          onClick={() => {
            if (task) {
              taskApi
                .update(task.id, { title: value, description: desc })
                .then((task) => {
                  dispatch(listsActions.updateTaskInList(task));
                  callback?.(task);
                });
            } else {
              taskApi.create(listId, { title: value }).then((task) => {
                dispatch(listsActions.addTaskToList(task));
                callback?.(task);
              });
            }
          }}
          color="accent"
        >
          {task ? "Update Task" : "Create Task"}
        </Button>
        {!!task && (
          <Button
            onClick={(e) => {
              e.preventDefault();
              taskApi.remove(task.id).then(() => {
                dispatch(listsActions.removeTaskFromList(task));
                callback?.(task);
              });
            }}
            color="danger"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
