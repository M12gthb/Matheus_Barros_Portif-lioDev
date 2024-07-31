import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
interface MyMetadata extends Metadata {
  title: string;
  description: string;
  icons: {
    icon: string;
  };
}

export const metadata: MyMetadata = {
  title: "Portifólio Matheus Barros",
  description:
    "Portifólio de desenvolvedor web full-stack para aprresentação profissional.",
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
