import { style, styleVariants } from "@vanilla-extract/css";

export const coverBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const coverContainer = styleVariants({
  circle: { borderRadius: "50%" },
  rectangle: {},
  window: {
    borderRadius: "8.5rem 8.5rem 0 0",
  },
});

export const windowShadow = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, rgba(13, 14, 17, 0.00) 40%, #0D0E11 100%)",
});

export const image = style({
  width: "100%",
  height: "100%",

  objectFit: "cover",
  margin: "auto",
});

export const imageBackground = style({
  filter: "brightness(0.7)",
});

export const buttonSize = styleVariants({
  small: { width: "2.4rem", height: "2.4rem" },
  large: { width: "3rem", height: "3rem" },
});

export const coverAlignBase = style({
  display: "grid",
  gridAutoFlow: "column",
  position: "relative",

  background: "transparent",
  border: "0px",
  filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.40))",

  cursor: "pointer",
});

export const coverAlign = styleVariants({
  center: { justifyContent: "center", alignItems: "center", position: "absolute" },
  rightBottom: { justifyContent: "flex-end", alignItems: "flex-end", padding: "1rem", position: "absolute" },
});

export const windowPadding = style({
  padding: "1.5rem",
});
