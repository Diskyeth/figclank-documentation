import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FigClank: Docs",
  description: "Documentation for FigClank - A Figma-like design tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
