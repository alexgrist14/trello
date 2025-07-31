import type { FC } from "react";
import * as styles from "./Input.css";
import classNames from "classnames";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={classNames(styles.input, className)} />;
};

export default Input;
