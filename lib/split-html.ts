export function splitHtmlByCode(html: string) {
  const parts = html.split(/(<div class="code-block-wrapper"[\s\S]*?<\/div>)/g);

  return parts
    .filter((p) => p.trim() !== "")
    .map((block) => {
      if (block.includes("code-block-wrapper")) {
        const raw = decodeURIComponent(
          block.match(/data-raw="([^"]+)"/)?.[1] || ""
        );
        const lang = block.match(/data-lang="([^"]+)"/)?.[1] || "text";

        return {
          type: "code",
          html: block,
          code: raw,
          lang,
        };
      }

      return {
        type: "html",
        html: block,
      };
    });
}
