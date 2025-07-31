import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "10px",
  height: "calc(100vh - 20px - 4rem)",
  overflowY: "hidden",
});
export const container = style({
  display: "flex",
  gap: "20px",
  width: "100%",
  paddingBlock: "20px",
  overflowY: "hidden",
});

export const list = style({
  position: "relative",
  width: "272px",
  flexShrink: 0,
  overflowY: "auto",
});

export const addListButton = style({
  height: "40px",
  width: "272px",
  minWidth: "272px",
});

export const buttons = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  maxHeight: "31px",
  maxWidth: "300px",
  marginBottom: "20px",
});
