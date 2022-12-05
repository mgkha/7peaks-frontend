import { globalStyle, style } from "@vanilla-extract/css";

export const bookmarkIcon = style({
  color: "#09357b",
  cursor: "pointer",
  padding: "0.5rem",
  fontSize: "1.2rem",
});

export const actionGroupWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "2rem",
});

export const sortingIcon = style({
  fontSize: "2rem",
  cursor: "pointer",
});

export const actionGroup = style({
  display: "none",
  flexDirection: "row",
  paddingLeft: "1.5rem",
  "@media": {
    "screen and (min-width: 600px)": {
      display: "flex",
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
    "screen and (min-width: 600px)": {
      display: "flex",
    },
  },
});

globalStyle(`${bookmarkBtn} span`, {
  fontSize: "0.8rem",
  marginLeft: "0.4rem",
});

export const mobileView = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gap: "0px 5px",
  gridTemplateAreas: ". .",
  justifyItems: "center",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 600px)": {
      display: "none",
    },
  },
});

export const sortingSelect = style({
  paddingRight: "4rem",
  border: "0",
  outline: "none",
  borderBottom: "1px solid",
  fontSize: "1rem",
  display: "none",
  "@media": {
    "screen and (min-width: 600px)": {
      display: "inline",
    },
  },
});
