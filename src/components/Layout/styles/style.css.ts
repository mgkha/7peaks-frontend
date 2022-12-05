import { style } from "@vanilla-extract/css";

export const layoutStyle = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const headerStyle = style({
  flexShrink: 0,
  background: "#09357b",
});

export const pageContent = style({
  padding: "0rem 1rem",
  marginTop: 0,
});

export const footerStyle = style({
  flexShrink: 0,
  backgroundColor: "#09357b",
  height: "10vh",
});

export const navStyle = style({
  margin: "0 auto",
  padding: "1rem 0rem",
  "@media": {
    "screen and (min-width: 600px)": {
      margin: "0 auto",
      maxWidth: "580px",
    },
    "screen and (min-width: 900px)": {
      margin: "0 auto",
      maxWidth: "850px",
    },
    "screen and (min-width: 1600px)": {
      margin: "0 auto",
      maxWidth: "1240px",
    },
  },
});

export const logoStyle = style({
  display: "inline",
  color: "white",
  fontSize: "2rem",
  padding: "0.5rem",
});

export const mainStyle = style({
  flexShrink: 0,
  margin: 0,
  flex: "1 0 auto",
  width: "100%",
  "@media": {
    "screen and (min-width: 600px)": {
      margin: "0 auto",
      maxWidth: "580px",
    },
    "screen and (min-width: 900px)": {
      margin: "0 auto",
      maxWidth: "850px",
    },
    "screen and (min-width: 1600px)": {
      margin: "0 auto",
      maxWidth: "1240px",
    },
  },
});

export const contentStyle = style({
  paddingBottom: "10rem",
});

export const searchBoxStyle = style({
  float: "right",
  position: "relative",
  borderBottom: "1px solid white",
  height: "40px",
  backgroundColor: "#09357b",
});

export const searchIconStyle = style({
  color: "white",
  width: "1.3rem",
  height: "1.3rem",
});

export const searchInputStyle = style({
  height: "100%",
  verticalAlign: "top",
  padding: "0",
  margin: "0",
  border: "0",
  outline: "0",
  color: "#d1d1d1",
  backgroundColor: "#2153a3",
  width: "0px",
  fontSize: "medium",
  WebkitTransition: "all 0.5s ease 0s",
  MozTransition: "all 0.5s ease 0s",
  OTransition: "all 0.5s ease 0s",
  transition: "all 0.5s ease 0s",
  ":focus": {
    padding: "0rem 1rem",
    width: "150px",
  },
  "::placeholder": {
    color: "#698bc1",
    opacity: "1",
  },
});

export const searchButtonStyle = style({
  backgroundColor: "transparent",
  border: "0",
  padding: "0 1.8rem",
  cursor: "pointer",
  height: "100%",
  selectors: {
    [`${searchInputStyle}:focus + &`]: { backgroundColor: "#2153a3" },
  },
});
