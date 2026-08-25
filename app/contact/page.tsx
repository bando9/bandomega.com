import Header from "@/components/layout/header";
import ContactForm from "@/app/contact/_components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Get in touch with Bando Mega Kusuma for collaboration, freelance projects, or tech discussions.",
};

export default function Contact() {
  return (
    <main className="mt-25 md:mt-35">
      <Header
        title="Contact"
        description="Let’s connect! Whether it’s about tech, collaboration, or just sharing ideas - here’s where you can reach me."
      />

      <ContactForm />
    </main>
  );
}
