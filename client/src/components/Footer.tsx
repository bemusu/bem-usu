// app/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-slate-800 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <div className="md:text-left">
                        <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li><Link href="/" className="hover:text-green-600 transition-colors">Beranda</Link></li>
                            <li><Link href="/tentang" className="hover:text-green-600 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="/berita" className="hover:text-green-600 transition-colors">Berita</Link></li>
                            <li><Link href="/kabinet" className="hover:text-green-600 transition-colors">Kabinet</Link></li>
                            <li><Link href="/kontak" className="hover:text-green-600 transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-3">
                            <Image src="/img/bem_usu.png" alt="Logo BEM USU" width={50} height={50} />
                            <Image src="/img/logo kabinet.png" alt="Logo Kabinet Aksi Bersama" width={50} height={50} />
                        </div>
                        <p className="font-bold text-base">Pemerintahan Mahasiswa</p>
                        <p className="text-sm text-slate-500">Universitas Sumatera Utara</p>
                        
                        <div className="flex space-x-2 mt-5">
                            <a href="https://www.instagram.com/bemusu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-slate-800 text-white p-2 rounded-md hover:bg-green-600 transition-colors">
                                <FaInstagram size={18} />
                            </a>
                             <a href="https://www.twitter.com/bemusu" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-slate-800 text-white p-2 rounded-md hover:bg-green-600 transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://youtube.com/c/bemusu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-slate-800 text-white p-2 rounded-md hover:bg-green-600 transition-colors">
                                <FaYoutube size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@bemusu" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-slate-800 text-white p-2 rounded-md hover:bg-green-600 transition-colors">
                                <FaTiktok size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="md:text-left">
                        <h3 className="font-bold text-lg mb-4">Info Kontak</h3>
                        <address className="not-italic space-y-4 text-slate-600">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <FiPhone className="text-green-600" />
                                <span>+62 8XX-XXXX-XXXX (Partnership)</span>
                            </div>
                             <div className="flex items-center justify-center md:justify-start gap-3">
                                <FiPhone className="text-green-600" />
                                <span>+62 8XX-XXXX-XXXX (Organisasi)</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <FiMail className="text-green-600" />
                                <a href="mailto:bem@usu.ac.id" className="hover:text-green-600">bem@usu.ac.id</a>
                            </div>
                            <div className="flex items-start justify-center md:justify-start gap-3">
                                <FiMapPin className="text-green-600 mt-1" />
                                <span>Sekretariat BEM USU, Kampus USU Padang Bulan, Medan</span>
                            </div>
                        </address>
                    </div>

                </div>

                <hr className="border-slate-200 my-8" />
                <div className="text-center text-sm text-slate-500">
                    <p>Copyright © {currentYear} BEM Universitas Sumatera Utara - All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}