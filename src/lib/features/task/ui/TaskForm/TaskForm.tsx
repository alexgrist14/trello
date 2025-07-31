import { useCallback, useState, type FC, type FormEvent } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import * as styles from "./TaskForm.css";
import type { Task } from "../../../../shared/types/tasks.type";
import { taskApi } from "../../../../shared/api/tasks";
import { useAppDispatch } from "../../../../shared/store";
import { listsActions } from "../../../../shared/store/slices/listsSlice";
import { Textarea } from "../../../../shared/ui/Textarea";

interface TaskFormProps {
  task?: Task;
  callback?: (task: Task) => void;
  listId: number;
}

const TaskForm: FC<TaskFormProps> = ({ task, callback, listId }) => {
  const dispatch = useAppDispatch();

  const [isRemove, setIsRemove] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as HTMLFormElement);
      const title = data.get("title") as string;
      const description = data.get("desc") as string;
      if (task) {
        taskApi.update(task.id, { title, description }).then((task) => {
          dispatch(listsActions.updateTaskInList(task));
          callback?.(task);
        });
      } else {
        taskApi.create(listId, { title }).then((task) => {
          dispatch(listsActions.addTaskToList(task));
          callback?.(task);
        });
      }
    },
    [callback, dispatch, listId, task]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {!isRemove && (
        <>
          {" "}
          <div className={styles.inputs}>
            <Input
              autoFocus
              name="title"
              defaultValue={task?.title || ""}
              required
            />
            {!!task && (
              <Textarea
                name="desc"
                defaultValue={task?.description || ""}
                resize
              />
            )}
          </div>
          <div
            className={styles.buttons}
            style={{ gridTemplateColumns: task ? "1fr 1fr" : "1fr" }}
          >
            {task ? (
              <Button color="accent">Update task</Button>
            ) : (
              <Button color="accent">Create task</Button>
            )}
            {!!task && (
              <Button
                onClick={() => setIsRemove(true)}
                type="button"
                color="danger"
              >
                Remove
              </Button>
            )}
          </div>
        </>
      )}
      {!!task && isRemove && (
        <div className={styles.confirm}>
          <h3>Are you sure you want to delete the task "{task.title}"?</h3>
          <Button
            type="button"
            onClick={() => {
              taskApi.remove(task.id).then(() => {
                dispatch(listsActions.removeTaskFromList(task));
                callback?.(task);
              });
            }}
          >
            Yes
          </Button>
          <Button
            type="button"
            onClick={() => setIsRemove(false)}
            color="danger"
          >
            No
          </Button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
