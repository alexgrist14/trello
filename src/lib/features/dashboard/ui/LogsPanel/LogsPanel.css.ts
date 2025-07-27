import { style } from "@vanilla-extract/css";
import { textColor } from "../../../../shared/constants/common";

export const wrapper = style({
  position: "absolute",
  right: "0",
  background: "#282e33",
  width: "300px",
  padding: "8px",
  borderRadius: "8px 0 0 8px",
  height: "820px",
  zIndex: 2,
  overflowY: "auto",
  color: textColor,
  opacity: 0,
  transform: "translateX(20px)",
  transition: "transform 0.3s ease, opacity 0.3s ease",
  pointerEvents: "none",
});

export const wrapperActive = style({
  selectors: {
    "div &": {
      transform: "translateX(0)",
      opacity: 1,
      pointerEvents: "all",
    },
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "12px",
});

export const text = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textAlign: "left",
});

export const log = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "5px",
});

export const svg = style({
  width: "32px",
  height: "32px",
});

export const title = style({
  fontWeight: "bold",
});
