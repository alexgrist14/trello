import { style } from "@vanilla-extract/css";

export const loader = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0.7,
  pointerEvents: "none",
  filter: "drop-shadow(0 0 0.2rem black)",
});
