'use client'; 

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Handshake, Store, Menu, X } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                {/* Logo dan Nama Kabinet */}
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

                {/* Tombol Aksi untuk Desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/prosedur" className="flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-colors">
                        <Handshake size={18} />
                        <span>Prosedur</span>
                    </Link>
                </div>

                {/* Tombol Hamburger untuk Mobile */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                        className="text-gray-800 focus:outline-none"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-2 pt-4">
                             <Link href="/prosedur" className="flex items-center justify-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-colors">
                                <Handshake size={18} />
                                <span>Prosedur</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}