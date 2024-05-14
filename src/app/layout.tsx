import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const font1 = Lato({ subsets: ["latin"], weight:"400" });

export const metadata: Metadata = {
  title: "Vazdev - Desarrollo de aplicaciones",
  description: "Desarrollo de aplicaciones web para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font1.className}>
        <NavBar />
        <div>
          {children}
        </div>
        <Footer/>
      </body>

    </html>
  );
}
