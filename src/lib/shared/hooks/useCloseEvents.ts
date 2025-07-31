import { type RefObject, useEffect } from "react";

const useCloseEvents = (
  refs: RefObject<HTMLDivElement | null>[],
  callback: () => void
): void => {
  useEffect(() => {
    const clickHandler = (e: MouseEvent): void => {
      const isOutside = refs.every(
        (ref) => !ref.current?.contains(e.target as Node)
      );
      if (isOutside) {
        callback();
      }
    };

    const keydownHandler = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [refs, callback]);
};

export default useCloseEvents;
