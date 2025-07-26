import { style } from "@vanilla-extract/css";
import { accent } from "../../constants/common";

export const input = style({
  paddingInline: "10px",
  borderRadius: "5px",
  height: "40px",
  width: "100%",
  backgroundColor: "#262c36",
  border: "1px solid transparent",
  transition: "border 0.2s",
  selectors: {
    "&:hover, &:focus-visible": {
      borderColor: "black",
    },
    "&:focus": {
      borderColor: accent,
    },
  },
});
