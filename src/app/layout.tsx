import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "../components/app-shell";
import "./globals.css";

import { portfolioData } from "../data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.personal.fullName} | Portfolio`,
  description: `Portfolio of ${portfolioData.personal.fullName} - ${portfolioData.personal.titles.join(", ")}`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW0yNf2zKf4S6+f8qf6pE6G7M4Q3Jf+f0P6N8fB+fU9AA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
