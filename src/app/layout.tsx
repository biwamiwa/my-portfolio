import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "miwa tanaka",
  description: "musician・soundscape designer",
  openGraph: {
    title: "miwa tanaka",
    description: "musician・soundscape designer",
    url: "https://miwatanaka.com",
    siteName: "miwa tanaka",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "miwa tanaka",
    description: "musician・soundscape designer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {/* Header */}
        <header className="px-6 pt-6 pb-4">
          <Link href="/" className="text-sm">
            miwa tanaka
          </Link>
        </header>

        {/* Navigation */}
        <nav className="grid grid-cols-12 px-6 pb-10">
          <div className="col-span-12 flex gap-6 text-sm">
            <Link href="/work">WORK</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </nav>

        {/* Content */}
        <main className="px-6">{children}</main>

        {/* Footer */}
        <footer className="px-6 pt-24 pb-8 text-xs opacity-40">
          &copy; 2026 miwa tanaka
        </footer>
      </body>
    </html>
  );
}
