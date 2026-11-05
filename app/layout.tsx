import type { Metadata } from "next";
import "./globals.css";
import "./custom.css"
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Honey Comb AI",
  description:
    "The GTM Intelligence Layer for complex B2B revenue teams—reads intent signals, coordinates engagement, and keeps deals moving from pre-pipeline through post-meeting execution.",
  manifest: '/manifest.json',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
              <main className="flex-1 flex flex-col w-full">{children}</main>
              <Toaster />
      </body>
    </html>
  );
}
