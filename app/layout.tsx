import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "GreenSync — Digital Solutions",
    template: "%s | GreenSync",
  },
  description:
    "GreenSync builds digital products, custom software, websites, mobile applications and growth solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>

        <Script
          id="tawk-to-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = window.Tawk_API || {};
              var Tawk_LoadStart = new Date();

              (function () {
                var s1 = document.createElement("script");
                var s0 = document.getElementsByTagName("script")[0];

                s1.async = true;
                s1.src = "https://embed.tawk.to/6ae0a24c5770853473253724/1k5unjvam";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");

                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
