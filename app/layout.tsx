import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bando Mega Kusuma | Software Engineer & Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6aa301a2-065a-479e-b3b1-1e10a35c9294"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-text`}
      >
        <NavBar />

        <main className="mt-25 md:mt-35">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
