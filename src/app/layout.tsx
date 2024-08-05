import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/post.css";

import AutoRefresh from "./_components/dev/AutoRefresh";
import GlobalHeader from "./_components/GlobalHeader";

export const metadata: Metadata = {
  title: `Anteater's laboratory`,
  description: `anteater1056, anteater333, anteater's laboratory, anteater_lab, Anteater's laboratory, hack the, 소프트웨어 개발자, Anteater 이지훈, https://blog.anteater-lab.link/, 자잘한 도움말, Next.js SSG 블로그`,
  authors: {
    name: "Anteater",
    url: "https://github.com/anteater333",
  },
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AutoRefresh>
      <html lang="en">
        <head>
          <title>Anteater's laboratory | CATCH PHRASE !!</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>
        <body>
          <GlobalHeader />
          {children}
        </body>
      </html>
    </AutoRefresh>
  );
}
