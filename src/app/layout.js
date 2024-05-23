import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wavea",
  description: "Riding the next digital waves technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '$
          {process.env.GOOGLE_ANALYTICS}');
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
