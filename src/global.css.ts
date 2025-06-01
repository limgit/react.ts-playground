import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
  padding: 0,
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

globalStyle("#app", {
  width: "100%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",

  fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
});
