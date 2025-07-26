import { style, styleVariants } from "@vanilla-extract/css";
import { accent } from "../../constants/common";

export const container = style({
  backgroundColor: "#1a2024ff",
  borderRadius: "8px",
  minHeight: "64px",
  padding: "8px 12px 4px",
  textAlign: "left",
  selectors: {
    "&:hover": {
      outline: `${accent} solid 2px`,
      cursor: "pointer",
    },
  },
});

export const containerVariants = styleVariants({
  dragging: {
    backgroundColor: "#2d3748ff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transform: "scale(1.02)",
  },
  canDrop: {
    backgroundColor: "#2c7a7bff",
    borderColor: "#2c7a7bff",
    borderWidth: "2px",
    borderStyle: "dashed",
  },
});
