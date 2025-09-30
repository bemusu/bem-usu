'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Handshake, Menu, X } from 'lucide-react';
import { HeaderProps } from '@/lib/types';
import StrapiImage from '../StrapiImage';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export function Header({
    bem_logo,
    cabinet_logo,
    title,
    navigation_links,
    cta
}: Readonly<HeaderProps>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
                {/* Logo dan Nama Kabinet */}
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    {/* Logo BEM USU */}
                    <div className='flex shrink-0 size-10 md:size-12 lg:size-14'>
                        <StrapiImage
                            src={bem_logo.image.url}
                            alt={bem_logo.image.alternativeText || "logo-bem-usu"}
                            className="size-10 md:size-12 lg:size-14"
                            width={56} height={56}
                        />
                    </div>
                    {/* Logo Kabinet */}
                    {cabinet_logo && (
                        <div className='flex shrink-0 size-10 md:size-12 lg:size-14'>
                            <StrapiImage
                                src={cabinet_logo.image.url}
                                alt={cabinet_logo.image.alternativeText || "logo-kabinet-bem"}
                                className="size-10 md:size-12 lg:size-14"
                                width={56} height={56}
                            />
                        </div>
                    )}
                    <div className="leading-tight text-gray-800">
                        <p className="text-sm md:text-base lg:text-lg font-bold tracking-wide max-w-36">{title}</p>
                    </div>
                </Link>

                {/* Navigasi untuk Desktop */}
                <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                    {navigation_links.map(link => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={clsx(
                                "text-gray-600 hover:text-green-600 transition-colors text-sm",
                                pathname === link.href && 'text-green-600'
                            )}
                            target={clsx(link.isExternal && '_blank')}
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>

                {/* Tombol Aksi untuk Desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        href={cta.href}
                        className="flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-colors"
                        target={clsx(cta.isExternal && '_blank')}
                    >
                        <Handshake size={18} />
                        <span>{cta.text}</span>
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
                        {navigation_links.map(link => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={clsx(
                                    "block text-gray-600 hover:text-green-600 py-2 text-center",
                                    pathname === link.href && 'text-green-600'
                                )}
                                onClick={() => setIsMenuOpen(false)}
                                target={clsx(link.isExternal && '_blank')}
                            >
                                {link.text}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-2 pt-4">
                            <Link
                                href={cta.href}
                                className="flex items-center justify-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-colors"
                                target={clsx(cta.isExternal && '_blank')}
                            >
                                <Handshake size={18} />
                                <span>{cta.text}</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}