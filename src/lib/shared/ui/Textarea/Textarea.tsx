import type { FC } from "react";
import { useRef } from "react";
import type { ITextareaProps } from "./Textarea.type";
import cn from "classnames";
import * as styles from "./Textarea.css";

export const Textarea: FC<ITextareaProps> = ({
  className,
  classNameField,
  clearErrors,
  resize = false,
  style,
  children,
  onChange,
  ref,
  ...props
}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={cn(styles.textarea, className)}>
      <textarea
        className={cn(classNameField, styles.textareaField)}
        style={{
          ...style,
          resize: resize ? "vertical" : "none",
        }}
        ref={(node) => {
          textRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        onClick={() => {
          if (clearErrors && props.name) clearErrors(props.name);
        }}
        onChange={(e) => {
          onChange?.(e);
        }}
        {...props}
      ></textarea>
      {children}
    </div>
  );
};
