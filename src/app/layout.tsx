import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Oak Gestão de Produtos",
  description: "Gestão de produtos para Oak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
