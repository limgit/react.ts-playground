import { vars } from "@/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "grid",
  gridTemplateAreas: `
    "header header"
    "board moves"
    "inputs none"
  `,
  gridTemplateColumns: "minmax(240px, 500px) 240px",
  gridTemplateRows: "repeat(3, auto)",
  gap: "8px",
  width: "fit-content",
  margin: "0 auto",
});

export const headerStyle = style({
  gridArea: "header",
  textAlign: "center",
});

export const boardStyle = style({
  gridArea: "board",
  position: "relative",
});

export const pieceLayerStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export const movesStyle = style({
  gridArea: "moves",
});

export const inputsStyle = style({
  gridArea: "inputs",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const inputFieldStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
globalStyle(`${inputFieldStyle} > *:nth-child(2)`, {
  flex: 1,
});

export const inputElStyle = style({
  outline: "none",
  color: vars.colors.gray11,
  background: vars.colors.primary3,
  border: `1px solid ${vars.colors.primary7}`,
  borderRadius: "4px",
  padding: "4px",

  selectors: {
    "&[data-hover]": {
      backgroundColor: vars.colors.primary4,
      borderColor: vars.colors.primary8,
    },
  },
});

export const buttonElStyle = style({
  cursor: "pointer",
  border: "none",
  color: vars.colors.primaryContrast,
  background: vars.colors.primary9,
  borderRadius: "4px",
  padding: "4px 12px",

  selectors: {
    "&[data-hover]": {
      backgroundColor: vars.colors.primary10,
    },
  },
});
