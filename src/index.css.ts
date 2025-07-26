import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeight: "1.5",
  fontWeight: "400",
  colorScheme: "light dark",
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#0d1117",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("#root", {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

globalStyle("html", {
  fontSize: "100%",
  WebkitTextSizeAdjust: "100%",
  height: "100%",
  scrollBehavior: "smooth",
});

globalStyle("body", {
  margin: "0",
  height: "100%",
  scrollBehavior: "smooth",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});
globalStyle("a:visited", {
  color: "inherit",
});
globalStyle("a:focus", {
  outline: "thin dotted transparent",
});
globalStyle("a:active", {
  outline: "0",
});
globalStyle("a:hover", {
  outline: "0",
});

globalStyle("button", {
  border: "none",
  background: "none",
  padding: "0",
  font: "inherit",
  color: "inherit",
  boxShadow: "none",
});
