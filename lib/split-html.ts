export function splitHtmlByPre(html: string) {
  const regex = /<pre[\s\S]*?<\/pre>/gm;

  const parts: { type: "pre" | "html"; content: string }[] = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "html",
        content: html.slice(lastIndex, match.index),
      });
    }

    parts.push({
      type: "pre",
      content: match[0],
    });

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < html.length) {
    parts.push({
      type: "html",
      content: html.slice(lastIndex),
    });
  }

  return parts;
}
