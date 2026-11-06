import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb Smith Creative | Your On-Demand Technology Partner",
  description:
    "Ongoing mobile app, website, and technology management for small businesses, churches, ministries, and growing organizations. One technical partner, one predictable monthly plan.",
  openGraph: {
    title: "Caleb Smith Creative | Your On-Demand Technology Partner",
    description:
      "Mobile apps, websites, email, CRM & integrations, managed for you every month.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
