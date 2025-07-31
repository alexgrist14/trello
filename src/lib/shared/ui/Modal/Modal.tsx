import { type FC, type ReactNode, useRef } from "react";
import cn from "classnames";
import * as styles from "./Modal.module.css";
import type { IModalParams } from "./Modal.types";
import { createPortal } from "react-dom";

interface IModalProps extends IModalParams {
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({ children, onClose, id, isActive }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closePopup = () => {
    if (onClose) onClose();
  };

  const root = document.getElementById("modals");
  if (!root || !isActive) {
    return null;
  }

  return createPortal(
    <div className={cn(styles.modal)} id={id} key={id}>
      <div ref={modalRef} className={styles.content}>
        {children}
      </div>
      <div
        className={styles.overlay}
        onClick={(e) => {
          e.stopPropagation();
          closePopup();
        }}
      ></div>
    </div>,
    root
  );
};
