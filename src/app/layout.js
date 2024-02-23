import { Inter } from "next/font/google";
import Header from "@/app/components/header";
import Providers from "@/app/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone Site",
  description: "IMDB clone site using next.js and trailwinds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body id="cnt_bdy" className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
