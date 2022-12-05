import { globalStyle, style } from "@vanilla-extract/css";

export const contentDivider = style({
  display: "block",
  marginTop: "1rem",
  borderTop: "1px solid #65656541",
  width: "100%",
});

export const contentImage = style({
  display: "block",
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const contentText = style({
  fontFamily: "Segoe UI , Tahoma , Geneva , Verdana , sans-serif",
});

export const contentWrapper = style({
  padding: "0 1rem",
});

export const articleContent = style({
  width: "100%",
  paddingBottom: "10rem",
  "@media": {
    "screen and (min-width: 1600px)": {
      paddingTop: "3rem",
    },
  },
});

export const bookmarkBtn = style({
  display: "none",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#09357b",
  color: "white",
  borderRadius: "0.4rem",
  padding: "0.7rem 1.5rem",
  textTransform: "uppercase",
  marginRight: "1rem",
  border: "0",
  cursor: "pointer",

  "@media": { 
    "screen and (min-width: 1600px)": {
      display: "block",
    },
  },
});

globalStyle(`${bookmarkBtn} span`, {
  fontSize: "0.8rem",
  marginLeft: "0.4rem",
});

export const bookmarkIcon = style({
  color: "#09357b",
  cursor: "pointer",
  padding: "0.5rem",
  fontSize: "1.2rem",
});

export const contentBody = style({
  "@media": {
    "screen and (min-width: 1600px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridAutoRows: "1fr",
      gap: "3rem",
      alignItems: "start",
    },
  },
});

export const contentDate = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "1rem",
});

globalStyle(`${contentDate} span`, {
  fontFamily:
    "system-ui , -apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Oxygen , Ubuntu , Cantarell , Open Sans , Helvetica Neue , sans-serif",
  fontSize: "0.9rem",
  display: "block",
  flexGrow: "4",
});

export const contentFigure = style({
  "@media": {
    "screen and (min-width: 1600px)": {
      marginTop: "2rem",
    },
  },
});

globalStyle(`${contentFigure} figure`, {
  margin: "0",
});

globalStyle(`${contentFigure} img`, {
  objectFit: "contain",
  width: "100%",
  height: "40vh",
  "@media": {
    "screen and (min-width: 1600px)": {
      height: "100%",
    },
  },
});

export const contentTitle = style({});

globalStyle(`${contentTitle} h1`, {
  fontWeight: "600",
  color: "#1d1d1d",
  marginTop: "1rem",
  fontSize: "1.7rem",
});

globalStyle(`${contentTitle} h2`, {
  marginTop: "0.5rem",
  fontFamily: "Georgia , Times New Roman , Times , serif",
  color: "#1e1e1e",
  fontWeight: "400",
  fontSize: "1.3rem",
});

export const mobile = style({
  "@media": {
    "screen and (min-width: 1600px)": {
      display: "none",
    },
  },
});
