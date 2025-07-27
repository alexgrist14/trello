import { style } from "@vanilla-extract/css";
import { bgAlt, textColor } from "../../constants/common";

export const container = style({
  width: "100%",
  color: textColor,
  padding: "8px",
  borderRadius: "12px",
  backgroundColor: bgAlt,
  position: "relative",
});

export const disabled = style({
  selectors: {
    "div &": {
      opacity: 0.5,
      pointerEvents: "none",
    },
  },
});

export const title = style({
  textAlign: "left",
  padding: "6px 8px 6px 12px",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const addButton = style({
  gap: "5px",
  height: "40px",
  marginTop: "10px",
  selectors: {
    "div &": {
      justifyContent: "flex-start",
    },
  },
});
