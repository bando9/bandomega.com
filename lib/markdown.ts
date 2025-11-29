import MarkdownIt from "markdown-it";
import prism from "markdown-it-prism";

import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-diff";

function rawCodePlugin(md: MarkdownIt) {
  const orig = md.renderer.rules.fence!;

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];

    const raw = encodeURIComponent(token.content);

    const rendered = orig(tokens, idx, options, env, self);

    return rendered.replace("<pre", `<pre data-raw="${raw}"`);
  };
}

export const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})
  .use(prism)
  .use(rawCodePlugin);
