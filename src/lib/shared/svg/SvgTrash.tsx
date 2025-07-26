import type { FC } from "react";

interface SvgTrashProps {
  width?: "16px" | "20px" | "24px";
  height?: "16px" | "20px" | "24px";
  className?: string;
}

export const SvgTrash: FC<SvgTrashProps> = ({
  className,
  width = "20px",
  height = "20px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
      ></path>
    </svg>
  );
};
