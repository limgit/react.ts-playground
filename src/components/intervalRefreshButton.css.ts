import { vars } from "@/theme.css";
import { keyframes, style } from "@vanilla-extract/css";
import { ROTATING_SECONDS } from "./intervalRefreshButton.service";

export const textPosition = style({
  position: "absolute",
});

const rotateKeyframe = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(-360deg)",
  },
});
export const rotateAnimation = style({
  animation: `${rotateKeyframe} ${ROTATING_SECONDS}s linear infinite`,
});

export const refreshButtonStyle = style({
  cursor: "pointer",
  border: "none",
  borderRadius: "50%",
  backgroundColor: vars.colors.primary3,
  color: vars.colors.primary11,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",

  selectors: {
    "&[data-hover]": {
      backgroundColor: vars.colors.primary4,
    },
  },
});
