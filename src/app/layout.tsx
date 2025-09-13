import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Dr. Folasade Femi-Lawal",
  description: "Official site draft",
  openGraph: { title: "Dr. Folasade Femi-Lawal", description: "Official site draft", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:border focus:px-3 focus:py-1 rounded">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
