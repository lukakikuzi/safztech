import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";

import { GetPageMetadata } from "@/utils/meta-data";

// STYLE SHEETS SOURCE
import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/includes.css";
import Script from "next/script";

// FONT CONFIGURATIONS
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata({
  verification: {
    google: "w1YMa1gW1LHCKYBZK_U8LbTN8Ocoj4n6O8X-CfwAnZE",
  },
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Script
          src="ht`tps://www.googletagmanager.com/gtag/js?id=G-EG7BGEXBGM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EG7BGEXBGM');
          `}
        </Script>`
        {children}
        {/* <script src="//code.tidio.co/dcjhhvqtoybvdangel3ugecdicartvq7.js" async /> */}
      </body>
    </html>
  );
}
