import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davon – Healthcare Maintenance Intelligence",
  description:
    "Davon helps hospitals orchestrate critical maintenance workflows with real-time visibility, automation, and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-shell">
          <Navbar />
          <main className="page-main pt-[var(--nav-height)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
