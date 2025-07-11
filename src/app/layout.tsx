import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import NextUIProvider from "../context/nextUI";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const aspekta = localFont({
  src: "./fonts/Aspekta-800.woff2",
  variable: "--font-aspekta",
  weight: "500",
})

export const metadata: Metadata = {
  title: "Clause",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${aspekta.variable} antialiased light`}
      >
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          <NextUIProvider>
            <Navbar/>
            {children}
            <Footer/>
          </NextUIProvider>
      </body>
    </html>
  );
}
