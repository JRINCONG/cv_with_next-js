import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Navbar/Slider";
import Footer from "./components/Navbar/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="bumblebee" lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-width: 1024px`}
      >
        <Navbar/>
        <Slider/>
        {children}
        <p1>hola </p1>
      </body>
      <Footer/>
    </html>
  );
}
