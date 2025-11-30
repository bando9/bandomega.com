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

const defaultFence =
  md.renderer.rules.fence ||
  ((tokens, idx, options, _env, self) =>
    self.renderToken(tokens, idx, options));

md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const rawCode = token.content; // kode asli
  const lang = token.info.trim() || "text";

  const encodedRaw = encodeURIComponent(rawCode);

  const shikiHtml = defaultFence(tokens, idx, options, env, self);

  return `
<div class="code-block-wrapper" data-lang="${lang}" data-raw="${encodedRaw}">
  ${shikiHtml}
</div>
`;
};

md.use(
  await Shiki({
    themes: {
      light: "github-dark-default",
      dark: "github-dark-default",
    },
  })
);
