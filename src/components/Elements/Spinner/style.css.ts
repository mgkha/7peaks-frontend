import { keyframes, style } from "@vanilla-extract/css";

export const loadingStyle = style({
  width: "100%",
  marginTop: "25vh",
  display: "flex",
  justifyContent: "center",
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const rotateWebkit = keyframes({
  "0%": { WebkitTransform: "rotate(0deg)" },
  "100%": { WebkitTransform: "rotate(360deg)" },
});

export const loadingSpinStyle = style({
  border: "0.4rem solid #f3f3f3",
  borderRadius: "50%",
  borderTop: "0.4rem solid #09357b",
  width: "2rem",
  height: "2rem",
  animation: `${rotate} 1s linear infinite`,
  WebkitAnimation: `${rotateWebkit} 1s linear infinite`,
});

export const srOnly = style({
  display: "none",
});
