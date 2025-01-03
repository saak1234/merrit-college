"use client";

// import type {Metadata} from "next";
// import {Inter, Roboto_Mono} from "next/font/google";
import {Poppins} from "next/font/google";
import "./globals.css";
import { usePathname,useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Define public routes that don't require authentication
    const publicRoutes = ['/auth-page'];

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const token = localStorage.getItem("authToken");
                
                if (!token) {
                    setIsAuthenticated(false);
                    if (!publicRoutes.includes(pathname)) {
                        router.push('/auth-page');
                    }
                    return;
                }

                const response = await fetch('/api/auth/verify', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    localStorage.removeItem("authToken");
                    setIsAuthenticated(false);
                    if (!publicRoutes.includes(pathname)) {
                        router.push('/auth-page');
                    }
                    return;
                }

                setIsAuthenticated(true);
                if (publicRoutes.includes(pathname)) {
                    router.push('/'); 
                }
            } catch (error) {
                console.error('Auth verification failed:', error);
                setIsAuthenticated(false);
                if (!publicRoutes.includes(pathname)) {
                    router.push('/auth-page');
                }
            } finally {
                setIsLoading(false);
            }
        };

        verifyAuth();
    }, [pathname, router]);

    if (isLoading) {
        return (
            <html>
                <body>
                   <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                 </div> 
                </body>
            </html>
            
        );
    }
    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        return (
            <html>
                <body>
                     <div className="min-h-screen flex items-center justify-center">
                    <div className="text-xl font-semibold text-gray-600"></div>
                    </div>
                </body>
            </html>
         
        );
      }
    const excludeHeaderFooter = pathname.startsWith("/admin") || pathname.startsWith("/auth");
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} antialiased bg-secondary-green text-gray-800`}
        >
                {!excludeHeaderFooter && isAuthenticated && <Header />}
                {children}
                {!excludeHeaderFooter && isAuthenticated && <Footer />}
        </body>
        </html>
    );
}
