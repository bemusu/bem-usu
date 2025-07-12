import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<nav className="bg-gray-800 text-white p-4">
					<div className="container mx-auto flex justify-between">
						<Link href={'/'} className="font-bold">
							BEM USU
						</Link>

						<div>
							<Link href={'/'} className="p-2">
								Beranda
							</Link>
							<Link href={'/tentang'} className="p-2">
								Tentang
							</Link>
							<Link href={'/berita'} className="p-2">
								Berita
							</Link>
							<Link href={'/kontak'} className="p-2">
								Kontak
							</Link>
							<Link href={'/kabinet'} className="p-2">
								Kabinet
							</Link>
							<Link href={'/prosedur'} className="p-2">
								Prosedur
							</Link>
						</div>
					</div>
				</nav>

				<main>
					{children}
				</main>

				{/* Footer */}
			</body>
		</html>
	);
}
