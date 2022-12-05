import { globalKeyframes, style } from "@vanilla-extract/css";

globalKeyframes("slide-in", {
  from: {
    transform: "translateY(100%)",
    opacity: "0",
  },
  to: {
    transform: "translateY(0%)",
    opacity: "1",
  },
});

globalKeyframes("slide-out", {
  to: {
    transform: "translateY(100%)",
    opacity: "0",
  },
});

export const snackbarItem = style({
  borderRadius: "0.2rem",
  margin: "0.3rem 0",
  padding: "0.8rem",
  backgroundColor: "#11beaacb",
  fontFamily:
    "Trebuchet MS , Lucida Sans Unicode , Lucida Grande , Lucida Sans , Arial , sans-serif",
});

export const snackbarItemEnterActive = style({
  animation: "slide-in 600ms ease",
});

export const snackbarItemExitActive = style({
  animation: "slide-out 600ms ease",
});

export const snackbarWrapper = style({
  zIndex: "999",
  position: "fixed",
  top: "0",
  left: "50%",
  transform: "translate(-50%,0)",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginTop: "1rem",
  "@media": {
    "screen and (min-width: 900px)": {
      position: "fixed",
      top: "auto",
      left: "auto",
      transform: "none",
      right: "0",
      bottom: "0",
      margin: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "30vw",
    },
    "screen and (min-width: 1200px)": {
      width: "20vw",
    },
    "screen and (min-width: 1600px)": {
      width: "15vw",
    },
  },
});
