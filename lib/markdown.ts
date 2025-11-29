import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";

export const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
}).use(
  await Shiki({
    themes: {
      light: "github-dark-default",
      dark: "github-dark-default",
    },
  })
);
