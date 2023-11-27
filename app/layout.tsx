import type { Metadata } from "next";
import "./globals.css";
import "./base.css";
import "./main.css";
import "./vendor.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Your Name Here",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en">
      <Script src="/js/modernizr.js" defer />
      <body id="top">{children}</body>
      <Script src="/js/jquery-3.2.1.min.js" defer />
      <Script src="/js/plugins.js" defer />
      <Script src="/js/main.js" defer />
    </html>
  );
}
