import { style } from "@vanilla-extract/css";

export const bookmarksSection = style({
  width: "100%",
});

export const bookmarksContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "1fr",
  gap: "1em 1em",
  gridAutoFlow: "row",
  "@media": {
    "screen and (min-width: 900px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridAutoRows: "1fr",
      gap: "30px 30px",
      gridAutoFlow: "row",
    },
    "screen and (min-width: 1600px)": {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridAutoRows: "1fr",
      gap: "30px 30px",
      gridAutoFlow: "row",
    },
  },
});

export const noBookmarkText = style({
  fontFamily: "Arial, Helvetica, sans-serif",
  fontWeight: "lighter",
  fontSize: "1rem",
});
