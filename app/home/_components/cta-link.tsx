import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";

type CTALinkProps = {
  text: string;
  link: string;
};
export default function CTALink({ text, link }: CTALinkProps) {
  return (
    <Button
      variant="default"
      className="mx-auto flex items-center bg-transparent hover:bg-transparent"
    >
      <Link
        href={link}
        className="flex items-center gap-2 cursor-pointer border rounded-lg py-1 px-3 hover:underline"
      >
        <h3>{text}</h3>
        <RiArrowRightLine />
      </Link>
    </Button>
  );
}
