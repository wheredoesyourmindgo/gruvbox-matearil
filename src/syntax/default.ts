import { Palette } from "../interface";
import { getItalicSyntax } from "./italic";

export function getDefaultSyntax(palette: Palette, italicComments: boolean) {
  const syntax = getItalicSyntax(palette, italicComments);
  const noItalicSyntax = syntax.map(tmr => {
    const { name, settings, ...rest } = tmr;
    if (!/^comment$/i.test(name)) {
      Object.keys(settings).forEach(k => {
        if (k === "fontStyle" && settings[k] === "italic") {
          settings[k] = "";
        }
      });
    }
    return { ...rest, name, settings };
  });
  return noItalicSyntax;
}
