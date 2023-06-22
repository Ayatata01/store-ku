import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Meta title="Next Store" />
      <Header />
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>
      <Footer />
    </div>
  );
}
