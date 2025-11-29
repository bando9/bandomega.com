import MarkdownIt from "markdown-it";
import prism from "markdown-it-prism";

import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-diff";

export const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(prism);
