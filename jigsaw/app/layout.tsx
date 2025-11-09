import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jigsaw — aligning pieces",
  description:
    "A living 3D home that pieces together my code, memories, and stories. Explore my world — one piece at a time.",
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
