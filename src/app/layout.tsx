import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinshasa doit bouger",
  description: "Que veux-tu voir changer ? Eloko nini faut é changer?",
  applicationName: "Pesa Avis Nayo",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
