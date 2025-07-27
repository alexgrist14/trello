import { style } from "@vanilla-extract/css";
import { bg } from "../../../../shared/constants/common";

export const form = style({
  display: "grid",
  gap: "10px",
  backgroundColor: bg,
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(136, 131, 131, 0.1)",
  minWidth: "300px",
  maxWidth: "450px",
  width: "40vw",
});

export const inputs = style({
  display: "grid",
  gap: "10px",
});

export const buttons = style({
  display: "grid",
  gap: "10px",
});
