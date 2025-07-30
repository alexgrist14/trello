import { useCallback, type FC, type FormEvent } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import * as styles from "./ListForm.css";
import type { List } from "../../../../shared/types/lists.type";
import { listApi } from "../../../../shared/api/lists";
import { useAppDispatch } from "../../../../shared/store";
import { listsActions } from "../../../../shared/store/slices/listsSlice";

interface ListFormProps {
  list?: List;
  callback?: (list: List) => void;
  boardId: number;
}

const ListForm: FC<ListFormProps> = ({ list, callback, boardId }) => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData(e.target as HTMLFormElement);
      const title = data.get("title") as string;

      if (list) {
        listApi.update(list.id, { title }).then((list) => {
          dispatch(listsActions.updateList(list));
          callback?.(list);
        });
      } else {
        listApi.create(boardId, { title }).then((dash) => {
          dispatch(listsActions.addList(dash));
          callback?.(dash);
        });
      }
    },
    [callback, list, boardId, dispatch]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input name="title" defaultValue={list?.title || ""} autoFocus required />
      {list ? (
        <Button color="accent">Update List</Button>
      ) : (
        <Button color="accent">Create List</Button>
      )}
    </form>
  );
};

export default ListForm;
