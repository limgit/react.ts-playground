import { gray, iris } from "@radix-ui/colors";
import { createTheme, layer } from "@vanilla-extract/css";

export const themeLayer = layer("theme");

function convertRadixColor<
  ColorName extends string,
  SemanticName extends string,
  ColorMap extends Record<string, string>,
>(colorName: ColorName, semanticName: SemanticName, colorMap: ColorMap) {
  return Object.fromEntries(
    Object.entries(colorMap).map(([key, value]) => [
      key.replace(colorName, semanticName),
      value,
    ]),
  ) as {
    [key in keyof ColorMap as key extends `${ColorName}${infer N}`
      ? `${SemanticName}${N}`
      : never]: string;
  };
}

export const [theme, vars] = createTheme({
  "@layer": themeLayer,
  colors: {
    ...convertRadixColor("iris", "primary", iris),
    primaryContrast: "#fff",
    ...convertRadixColor("gray", "gray", gray),
  },
});
