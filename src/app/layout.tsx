import type { Metadata } from "next";

import "../styles/statics/initialize.scss";
import "../styles/statics/ReactToastify.min.css";

import GlobalHeader from "./_components/GlobalHeader";
import StyledComponentsRegistry from "@/lib/registry";
import { GoogleAnalytics } from "@next/third-parties/google";
import PageUtilities from "./_components/PageUtilities";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: `Anteater's laboratory`,
  description: `Anteater의 연구소, Next.js로 구축한 블로그입니다. 소프트웨어 개발과 관련된 이야기를 합니다.`,
  authors: {
    name: "Anteater",
    url: "https://github.com/anteater333",
  },
  openGraph: {
    images: ["/assets/pictures/placeholder-og.png"],
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
        <title>Anteater's laboratory | CATCH PHRASE !!</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />

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

        {/* Naver Search Advisor */}
        <meta
          name="naver-site-verification"
          content="b7a2697a52c55e85d02c998617f376eff9cf032b"
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="xkt-c8HpH7HVWXkJLnGtNZ7dmF3BEDqy0e7ZQzE2cGs"
        />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-XY1FSXXJM2" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalHeader />
          {children}
          <PageUtilities />
        </StyledComponentsRegistry>
        <ToastContainer />
      </body>
    </html>
  );
}
