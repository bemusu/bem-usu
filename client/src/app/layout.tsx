import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { getGlobalSettings } from "@/data/loaders";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "BEM USU",
        template: "%s | BEM USU"
    },
    description: "Situs resmi Badan Eksekutif Mahasiswa (BEM) Universitas Sumatera Utara. Dapatkan informasi terbaru seputar kegiatan, berita, dan kabinet.",
    keywords: ["BEM USU", "Pema USU", "Universitas Sumatera Utara", "Mahasiswa USU", "Info BEM", "Badan Eksekutif Mahasiswa USU", "BEM Universitas Sumatera Utara"],
    authors: [
        { name: "BEM USU" }
    ],
    creator: "Kementerian Koordinator Komunikasi dan Informasi Divisi Desain dan Komunikasi Visual"
};

const loader = async () => {
    const { data } = await getGlobalSettings()

    if (!data) throw new Error("Gagal mengambil data pengaturan global")

    return {
        header: data.header,
        footer: data.footer
    }
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { header, footer } = await loader()

    return (
        <html lang="id">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 flex flex-col min-h-screen`}>
                <Header {...header} />
                
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>

                <Footer {...footer} />
            </body>
        </html>
    );
}