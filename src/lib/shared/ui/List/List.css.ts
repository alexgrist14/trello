import { style } from "@vanilla-extract/css";
import { bgAlt } from "../../constants/common";

export const container = style({
  maxWidth: "284px",
  width: "100%",
  color: "#b6c2cf",
  padding: "8px",
  borderRadius: "12px",
  backgroundColor: bgAlt,
});

export const title = style({
  color: "#b6c2cf",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const addButton = style({
  marginTop: "10px",
});
