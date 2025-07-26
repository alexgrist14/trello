import { style } from "@vanilla-extract/css";
import { accent, bgAlt } from "../../../shared/constants/common";

export const list = style({
  display: "flex",
  gap: "20px",
  padding: "10px",
  borderRadius: "8px",
});

export const controls = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "5px",
  borderRadius: "8px",
});

export const cards = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const card = style({
  position: "relative",
  padding: "10px",
  borderRadius: "12px",
  width: "150px",
  aspectRatio: "5/3",
  backgroundColor: bgAlt,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid black`,
  transition: "0.2s",
  userSelect: "none",
  cursor: "pointer",
  fontSize: "14px",
  selectors: {
    "&:hover, &:focus-visible": {
      filter: "brightness(1.2)",
      borderColor: accent,
      scale: "1.02",
    },
  },
});
