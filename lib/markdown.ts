import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";

export const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const next = tokens[idx + 1];

  if (next && next.type === "inline" && next.content) {
    const slug = next.content
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-");

    token.attrSet("id", slug);
  }

  return self.renderToken(tokens, idx, options);
};

md.use(
  await Shiki({
    themes: {
      light: "github-dark-default",
      dark: "github-dark-default",
    },
  })
);
