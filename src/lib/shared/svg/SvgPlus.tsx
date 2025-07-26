import type { FC } from "react";

interface SvgPlusProps {
  width?: "16px" | "20px" | "24px";
  height?: "16px" | "20px" | "24px";
  className?: string;
}

export const SvgPlus: FC<SvgPlusProps> = ({
  className,
  width = "20px",
  height = "20px",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
      ></path>
    </svg>
  );
};
