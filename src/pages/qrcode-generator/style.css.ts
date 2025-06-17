import { vars } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const fieldListContainer = style({
  display: "flex",
  gap: "8px",
  marginBottom: "16px",
});

export const fieldContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  alignItems: "flex-start",
});

export const labelStyle = style({
  display: "block",
  color: vars.colors.primary12,
  fontSize: "1.2rem",
  fontWeight: 500,
});

export const inputStyle = style({
  minWidth: "200px",
  border: `1px solid ${vars.colors.primary7}`,
  borderRadius: "4px",
  background: vars.colors.primary3,
  padding: "4px",
  outline: "none",

  selectors: {
    "&[data-hover]": {
      borderColor: vars.colors.primary8,
      background: vars.colors.primary4,
    },
  },
});
