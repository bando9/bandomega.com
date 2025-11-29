import CopyButton from "@/components/copy-button";

export default function CodeBlock({
  html,
  code,
}: {
  html: string;
  code: string;
}) {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
