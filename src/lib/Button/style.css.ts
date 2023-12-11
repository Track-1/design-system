import { style, styleVariants } from "@vanilla-extract/css";

export const center = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  minWidth: "max-content",
});

export const buttonBase = style({
  border: "0px",
});

export const buttonSize = styleVariants({
  small: [buttonBase, { padding: "1.1rem 1.2rem", height: "3.2rem", minWidth: "8.6rem" }],
  middle: [buttonBase, { height: "4.8rem", minWidth: "28.8rem" }],
  large: [buttonBase, { width: "100%", minWidth: "34rem" }],
});

export const buttonType = styleVariants({
  free: { borderRadius: "4rem", height: "5.2rem" },
  bottom: { position: "absolute", bottom: "0", height: "7.5rem" },
});

export const buttonColor = styleVariants({
  purple: { backgroundColor: "#5200FF", color: "white" },
  pink: { backgroundColor: "#E965FF", color: "#0D0E11" },
  green: { backgroundColor: "#43FF8E", color: "#0D0E11" },
  grey: { backgroundColor: "#1E2025", color: "#9EA1AB" },
});
