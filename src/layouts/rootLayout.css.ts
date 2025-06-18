import { vars } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  height: "100%",
  display: "flex",
});

export const navStyle = style({
  padding: "2px",
  height: "100%",
  minWidth: "240px",
  borderRight: `1px solid ${vars.colors.primary6}`,

  display: "flex",
  flexDirection: "column",
  gap: "2px",
  overflowY: "auto",
});

export const navLinkStyle = style({
  borderRadius: "4px",
  padding: "8px 12px",
  color: vars.colors.primary12,
  textDecoration: "none",
  selectors: {
    "&[data-hover]": {
      backgroundColor: vars.colors.primary3,
    },
    "&[data-active]": {
      backgroundColor: vars.colors.primary4,
      color: vars.colors.primary9,
    },
  },
});

export const mainStyle = style({
  flex: 1,
  padding: "4px",
});
