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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-dark text-text`}
      >
        <NavBar />
        <ThemeProvider
          attribute="class"
          defaultTheme=""
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
