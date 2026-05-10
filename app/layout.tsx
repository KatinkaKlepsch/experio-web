import { DM_Sans, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Experio — Et kurateret kulturelt abonnement",
  description:
    "Book koncerter, biograf, stand-up, museer, vinsmagninger og workshops i København. Ingen binding.",
  metadataBase: new URL("https://experio-web.pages.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}