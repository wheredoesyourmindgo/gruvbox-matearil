import { Palette } from "../interface";
import { getItalicSyntax } from "./italic";

export function getDefaultSyntax(palette: Palette, italicComments: boolean) {
  const syntax = getItalicSyntax(palette, italicComments);
  const noItalicSyntax = syntax.map(tmr => {
    const { settings, ...rest } = tmr;
    Object.keys(settings).forEach(k => {
      if (k === "fontStyle" && settings[k] === "italic") {
        settings[k] = "";
      }
    });
    return { ...rest, settings };
  });
  return noItalicSyntax;
}
