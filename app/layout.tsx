import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oceancountyjunkremoval.com"),
  title: {
    default: "Ocean County Junk Removal | Fast, Affordable Junk Hauling in NJ",
    template: "%s | Ocean County Junk Removal",
  },
  description:
    "Ocean County Junk Removal is the top-rated junk hauling service in Ocean County, NJ. Serving Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat and LBI. Same-day pickup, upfront pricing, fully insured.",
  keywords: [
    "junk removal Ocean County NJ",
    "junk removal Toms River",
    "junk removal Manahawkin",
    "junk removal Brick NJ",
    "junk removal Lacey NJ",
    "junk removal Stafford NJ",
    "junk removal Barnegat",
    "junk removal LBI",
    "furniture removal Ocean County",
    "appliance removal NJ",
    "estate cleanout Ocean County",
    "construction debris removal NJ",
  ],
  openGraph: {
    title: "Ocean County Junk Removal | Fast, Affordable Junk Hauling in NJ",
    description:
      "Same-day junk removal across Ocean County, NJ. Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat, LBI. Upfront pricing, fully insured.",
    url: "https://oceancountyjunkremoval.com",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
