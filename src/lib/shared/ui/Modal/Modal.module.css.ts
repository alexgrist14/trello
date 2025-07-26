import { keyframes, style } from "@vanilla-extract/css";
import { overlayColor } from "../../constants/common";

export const popupAppearance = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

export const modal = style({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  pointerEvents: "none",
  animation: `${popupAppearance} 0.3s`,
});

export const content = style({
  zIndex: 2,
  width: "fit-content",
  position: "relative",
  pointerEvents: "all",
});

export const overlay = style({
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "all",
  backgroundColor: overlayColor,
  zIndex: 1,
});
