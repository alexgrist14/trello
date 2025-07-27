import { type DetailedHTMLProps, type TextareaHTMLAttributes } from "react";

type ITextareaType = Pick<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  | "onFocus"
  | "defaultValue"
  | "autoComplete"
  | "disabled"
  | "id"
  | "value"
  | "onChange"
  | "onBlur"
  | "name"
  | "rows"
  | "onClick"
  | "readOnly"
  | "placeholder"
  | "className"
  | "children"
  | "style"
  | "onKeyDown"
  | "ref"
>;

export interface ITextareaProps extends ITextareaType {
  resize?: boolean;
  classNameField?: string;
  isDisableAutoResize?: boolean;
}
