import { style } from "@vanilla-extract/css";
import { accent, bgAlt } from "../../constants/common";

export const textarea = style({
  width: "100%",
  position: "relative",
  display: "grid",
  height: "fit-content",
});

export const textareaReplica = style({
  whiteSpace: "pre-wrap",
  width: "100%",
  height: "fit-content",
  padding: "14px 12px",
  position: "absolute",
  visibility: "hidden",
  pointerEvents: "none",
  minHeight: "48px",
  maxHeight: "40vh",
  overflow: "hidden",
  fontSize: "16px",
  lineHeight: "18px",
  fontWeight: 400,
});

export const textareaWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "2px",
  right: 0,
  width: "20px",
  height: "20px",
  cursor: "row-resize",
});

export const textareaCorner = style({
  pointerEvents: "none",
});

export const textareaField = style({
  fontSize: "16px",
  lineHeight: "18px",
  fontWeight: 400,
  width: "100%",
  height: "100%",
  minHeight: "150px",
  maxHeight: "40vh",
  padding: "14px 12px",
  borderRadius: "8px 8px 0 8px",
  background: bgAlt,
  color: "white",
  outline: "1px solid transparent",
  transition: "outline 0.15s ease-out",
  scrollbarWidth: "none",
  resize: "none",
  selectors: {
    "&:hover": {
      outlineColor: "black",
    },
    "&:focus": {
      outline: `1px solid ${accent}`,
    },
  },
});
