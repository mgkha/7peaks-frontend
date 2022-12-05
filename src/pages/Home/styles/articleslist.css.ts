import { style } from "@vanilla-extract/css";

export const articleSection = style({
  width: "100%",
});

export const categorySection = style({
  width: "100%",
});

export const categoryTitle = style({
  textTransform: "capitalize",
});

export const articleContainer = style({
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
      display: "none",
    },
  },
});

export const articleSplitContainer = style({
  display: "none",
  "@media": {
    "screen and (min-width: 1600px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "min-content 1fr",
      gap: "30px 30px",
      gridAutoFlow: "row",
      gridTemplateAreas: `
      "A1 A2"
      "A3 A3"
      `,
    },
  },
});

export const a1 = style({
  gridArea: "A1",
  display: "grid",
});

export const a2 = style({
  display: "grid",
  gridTemplateColumns: "2fr",
  gridTemplateRows: "2fr 2fr",
  gap: "30px 30px",
  gridAutoFlow: "row",
  gridTemplateAreas: `
        "A4"
        "A5"
      `,
  gridArea: "A2",
});

export const a3 = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridAutoRows: "1fr",
  gap: "30px 30px",
  gridAutoFlow: "row",
  gridArea: "A3",
});

export const a4 = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gap: "30px 30px",
  gridAutoFlow: "row",
  gridTemplateAreas: ". .",
  gridArea: "A4",
});

export const a5 = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gap: "30px 30px",
  gridAutoFlow: "row",
  gridTemplateAreas: ". .",
  gridArea: "A5",
});

export const categoryContainer = style({
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
