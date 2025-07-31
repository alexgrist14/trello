import { style } from "@vanilla-extract/css";
import { accent } from "../../constants/common";

export const input = style({
  paddingInline: "10px",
  borderRadius: "5px",
  height: "40px",
  width: "100%",
  backgroundColor: "#262c36",
  outline: "1px solid transparent",
  transition: "outline 0.2s",
  selectors: {
    "&:hover, &:focus-visible": {
      outlineColor: "black",
    },
    "&:focus": {
      outline: `1px solid ${accent}`,
    },
  },
});
