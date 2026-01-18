import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";

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
  description:
    "I'm Bando Mega Kusuma, a Software Engineer and Frontend Developer. Explore my portfolio, projects, blog, and ways to connect with me.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mt-25 md:mt-35">{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
