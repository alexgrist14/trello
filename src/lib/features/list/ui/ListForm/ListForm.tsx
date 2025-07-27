import { useState, type FC } from "react";
import Input from "../../../../shared/ui/Input/Input";
import Button from "../../../../shared/ui/Button/Button";
import * as styles from "./ListForm.css";
import type { IList } from "../../../../shared/types/lists.type";
import { listApi } from "../../../../shared/api/lists";
import { useAppDispatch } from "../../../../shared/store";
import { listsActions } from "../../../../shared/store/slices/listsSlice";

interface ListFormProps {
  list?: IList;
  callback?: (list: IList) => void;
  boardId: number;
}

const ListForm: FC<ListFormProps> = ({ list, callback, boardId }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(list?.title || "");

  return (
    <div className={styles.form}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        onClick={() => {
          if (list) {
            listApi.update(list.id, { title: value }).then((list) => {
              dispatch(listsActions.updateList(list));
              callback?.(list);
            });
          } else {
            listApi.create(boardId, { title: value }).then((dash) => {
              dispatch(listsActions.addList(dash));
              callback?.(dash);
            });
          }
        }}
        color="accent"
      >
        {list ? "Update List" : "Create List"}
      </Button>
    </div>
  );
};

export default ListForm;
