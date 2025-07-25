'use client'; // Wajib ada karena kita akan menggunakan state (useState)

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export function Header() {
    // State untuk mengelola visibilitas menu di mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Daftar link navigasi untuk menghindari duplikasi kode
    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/tentang", label: "Tentang" },
        { href: "/berita", label: "Berita" },
        { href: "/kabinet", label: "Kabinet" },
        { href: "/kontak", label: "Kontak" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo dan Nama Kabinet (menjadi link ke beranda) */}
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <Image 
                        src="/img/bem_usu.png" 
                        alt="Logo BEM USU" 
                        width={56} height={56}
                        className="h-10 w-10 md:h-14 md:w-14"
                    />
                    <Image 
                        src="/img/logo kabinet.png" 
                        alt="Logo Kabinet" 
                        width={56} height={56}
                        className="h-10 w-10 md:h-14 md:w-14"
                    />
                    <div className="leading-tight text-gray-800">
                        <p className="text-sm md:text-lg font-bold tracking-wide">KABINET AKSI</p>
                        <p className="text-sm md:text-lg font-bold tracking-wide">BERSAMA</p>
                    </div>
                </Link>

                {/* Navigasi untuk Desktop */}
                <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Tombol Hamburger untuk Mobile */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                        className="text-gray-800 focus:outline-none"
                    >
                        {/* Ikon X jika menu terbuka, ikon hamburger jika tertutup */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Dropdown untuk Mobile */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="block text-gray-600 hover:text-green-600 py-2 text-center"
                                onClick={() => setIsMenuOpen(false)} // Otomatis tutup menu saat link diklik
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}