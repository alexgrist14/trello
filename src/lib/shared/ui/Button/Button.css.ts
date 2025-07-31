import { style, styleVariants } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 10px",
  borderRadius: "4px",
  fontWeight: "500",
  transition: "background-color 0.2s",
  width: "100%",
  selectors: {
    "&:hover, &:focus-visible": {
      filter: "brightness(1.2)",
    },
    "&:active": {
      filter: "contrast(0.8)",
    },
  },
});

export const isOnlyIcon = style({
  padding: "2px",
  width: "fit-content",
  height: "fit-content",
});

export const buttonVariants = styleVariants({
  accent: { color: "white", backgroundColor: "rgb(78, 78, 230)" },
  edit: { color: "white", backgroundColor: "rgb(100, 179, 48)" },
  primary: { color: "white", backgroundColor: "rgba(102, 99, 99, 1)" },
  danger: { color: "white", backgroundColor: "rgba(165, 46, 46, 1)" },
});
