import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const fonrtSans = Patrick_Hand({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Kpop-List",
  description: "Website kepop list - just for fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fonrtSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
