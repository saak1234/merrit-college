"use client";

// import type {Metadata} from "next";
// import {Inter, Roboto_Mono} from "next/font/google";
import {Poppins} from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/LandingPage/landing-footer";
import Header from "@/components/LandingPage/landing-header";
import React from "react";
import '@/i18n/config';
// Google Fonts
// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-sans",
//     display: "swap",
// });

// const robotoMono = Roboto_Mono({
//     subsets: ["latin"],
//     variable: "--font-mono",
//     display: "swap",
// });

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});
// export const metadata: Metadata = {
//     title: "Merit College App",
//     description: "Merit College app for educational purposes",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const excludeHeaderFooter = pathname.startsWith("/admin");
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} antialiased bg-secondary-green text-gray-800`}
        >
        {!excludeHeaderFooter && <Header />}
        {children}
        {!excludeHeaderFooter && <Footer />}
        </body>
        </html>
    );
}
