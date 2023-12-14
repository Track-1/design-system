import { style } from "@vanilla-extract/css";

export const sheetContainer = style({
  borderRadius: "2rem 2rem 0 0!important",
  border: "1px solid var(--gray4, #313338)!important",
  background: "rgba(26, 28, 32, 0.80)!important",
  backdropFilter: "blur(1.5rem)!important",
});

export const sheetHeader = style({
  color: "#62656C!important",
  textAlign: "center",
  fontFamily: "Pretendard!important",
  fontSize: "1.6rem!important",
  fontStyle: "normal!important",
  fontWeight: "500!important",
  lineHeight: "normal!important",
  letterSpacing: "-0.016rem!important",
  margin: "2rem 0 4rem 0!important",
  width: "100%!important",
  display: "flex!important",
  justifyContent: "center!important",
});

export const overLay = style({
  background: "transparent!important",
});

export const statusBar = style({
  marginTop: "2rem",
  width: "5.6rem",
  height: "0.7rem",
  backgroundColor: "#313338",
  borderRadius: "5rem",
});

export const center = style({
  display: "flex",
  justifyContent: "center",
});
