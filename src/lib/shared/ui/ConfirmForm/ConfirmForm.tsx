import { type FC, type MouseEvent } from "react";
import * as styles from "./ConfirmForm.css";
import Button from "../Button/Button";

interface ConfirmFormProps {
  message: string;
  onConfirm: (e: MouseEvent<HTMLButtonElement>) => void;
  onCancel: () => void;
}

const ConfirmForm: FC<ConfirmFormProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.container}>
      <div>{message}</div>
      <Button onClick={onConfirm}>Yes</Button>
      <Button type="button" color="danger" onClick={onCancel}>
        No
      </Button>
    </div>
  );
};

export default ConfirmForm;
