import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Metadata } from "next";
import { satoshi, zodiak } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Leap Bridge Consultancy",
    template: "%s | Leap Bridge Consultancy",
  },
  description: "Connecting insights to impact",
  icons: {
    icon: "/assests/header/Homepage/logospage2/leap-bridge-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta
          name="google-site-verification"
          content="FQbepIwBzqGqjAuhIKpT0gHgv6-vdupykUgzWz0ifkI"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-645LPNKGWK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-645LPNKGWK');
            `,
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${satoshi.variable} ${zodiak.variable} bg-[var(--lgreen3)]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
