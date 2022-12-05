import { globalStyle, style } from "@vanilla-extract/css";

export const newsThumbThumbnail = style({
  display: "block",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  aspectRatio: "3 / 2",
});

export const newsThumbWrapper = style({
  cursor: "pointer",
  boxShadow: "0 1px 2px 0 #00000033 , 0 1.5px 5px 0 #00000030",
  width: "100%",
  display: "inline-block",
  position: "relative",
  ":hover": {
    boxShadow: "0 4px 8px 0 #00000033 , 0 6px 20px 0 #00000030",
  },
});

export const newsTitle = style({
  margin: "0",
  padding: "1rem",
  color: "white",
  fontSize: "1.8rem",
});

export const newsWrapper = style({
  cursor: "pointer",
  boxShadow: "0 1px 2px 0 #00000033 , 0 1.5px 5px 0 #00000030",
  backgroundColor: "#09357b",
  ":hover": {
    boxShadow: "0 4px 8px 0 #00000033 , 0 6px 20px 0 #00000030",
  },
});

export const newsThumbDescription = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  backgroundColor: "#09357be9",
  color: "#dfdfdf",
  width: "100%",
});

globalStyle(`${newsThumbDescription} div`, {
  padding: "0.5rem 0.5rem",
});

export const newsThumbTitle = style({
  fontSize: "0.7rem",
  margin: "0",
  padding: "0",
  "@media": {
    "screen and (min-width: 400px)": {
      fontSize: "0.9rem",
    },
    "screen and (min-width: 600px)": {
      fontSize: "1rem",
    },
    "screen and (min-width: 1600px)": {
      fontSize: "1.4rem",
    },
  },
});

export const newsThumbTrail = style({
  display: "none",
  fontSize: "0.5rem",
  fontFamily:
    "system-ui , -apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Oxygen , Ubuntu , Cantarell , Open Sans , Helvetica Neue , sans-serif",
  "@media": {
    "screen and (min-width: 600px)": {
      fontSize: "0.8rem",
      display: "inline",
    },
    "screen and (min-width: 1600px)": {
      fontSize: "0.9rem",
      display: "inline",
    },
  },
});
