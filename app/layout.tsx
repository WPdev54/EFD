import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import SmoothScroll from "./Components/HomePage/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EFD",
    description: "EFD BD Is A Engeniering Hiring Platform",
    icons: {
        icon: "./favicon.ico",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <SmoothScroll>
            <body className={`${inter.className} overflow-x-hidden`}>
                <div className="py-1"><Header /></div>
                {children}
                <Footer />
            </body>
            </SmoothScroll>
        </html>
    );
}
