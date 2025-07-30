import { style, styleVariants } from "@vanilla-extract/css";
import { accent } from "../../constants/common";

export const wrapper = style({
  paddingTop: "10px",
  position: "relative",
});

export const container = style({
  position: "relative",
  backgroundColor: "#1a2024ff",
  borderRadius: "8px",
  minHeight: "64px",
  padding: "8px 12px 4px",
  textAlign: "left",
  transition: "background-color 0.2s ease-in-out",
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
    transform: "scale(1.02)",
  },
  canDrop: {
    backgroundColor: accent,
  },
  hidden: {
    minHeight: "0",
    maxHeight: "0",
    cursor: "default",
    opacity: 0,
  },
});

export const divider = style({
  position: "absolute",
  top: "4px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "2px",
  height: "2px",
  width: "80%",
  backgroundColor: accent,
  transition: "0.2s ease-in-out",
  opacity: 0,
});

export const dividerActive = style({
  selectors: {
    "div &": {
      opacity: 1,
    },
  },
});
