export type Heading = {
  level: number;
  text: string;
  slug: string;
};

export function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ level, text, slug });
  }

  return headings;
}
