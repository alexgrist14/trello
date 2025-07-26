import { type FC } from "react";
import * as styles from "./Button.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "accent" | "edit" | "danger";
  isOnlyIcon?: boolean;
}

const Button: FC<ButtonProps> = ({
  color = "accent",
  children,
  className,
  isOnlyIcon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        className,
        styles.button,
        isOnlyIcon && styles.isOnlyIcon,
        color && styles.buttonVariants[color]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
