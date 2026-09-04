import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Training and Development | Tobams Group",
  description:
    "Tobams Group's comprehensive range of training programs and resources designed to enhance skills, broaden knowledge, and propel careers forward.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink-900">
        {children}
      </body>
    </html>
  );
}
