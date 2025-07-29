import Image from "next/legacy/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

const featuredNews = {
    imgURL: '/img/news1.png',
    genre: 'KEGIATAN KAMPUS',
    title: 'BEM USU Sukses Gelar Webinar Nasional Kewirausahaan Digital',
    excerpt: 'Diikuti oleh ribuan mahasiswa dari seluruh Indonesia, webinar ini menghadirkan para praktisi ahli untuk membagikan wawasan tentang membangun bisnis di era digital...',
    date: '29 JULI 2025'
};

const otherNews = [
    {
        imgURL: '/img/news1.png',
        genre: 'PRESTASI',
        title: 'Mahasiswa USU Raih Medali Emas di Kompetisi Sains Internasional',
        date: '28 JULI 2025'
    },
    {
        imgURL: '/img/news1.png',
        genre: 'OPINI',
        title: 'Pentingnya Peran Mahasiswa sebagai Agen Perubahan Sosial',
        date: '27 JULI 2025'
    },
    {
        imgURL: '/img/news1.png',
        genre: 'KEGIATAN KAMPUS',
        title: 'Program Pengabdian Masyarakat di Desa Binaan Berjalan Lancar',
        date: '26 JULI 2025'
    },
    {
        imgURL: '/img/news1.png',
        genre: 'ADVOKASI',
        title: 'BEM USU Kawal Isu Kenaikan UKT Bersama Aliansi Mahasiswa',
        date: '25 JULI 2025'
    },
    {
        imgURL: '/img/news1.png',
        genre: 'TEKNOLOGI',
        title: 'Pengembangan Aplikasi Aspirasi Digital untuk Mahasiswa USU',
        date: '24 JULI 2025'
    },
    {
        imgURL: '/img/news1.png',
        genre: 'SENI & BUDAYA',
        title: 'Pentas Seni Tahunan Kembali Digelar dengan Meriah',
        date: '23 JULI 2025'
    },
];

export default function BeritaPage() {
    return (
        <div>
            {/* 1. Hero Section */}
            <section
                className="relative text-white text-center py-40 px-6"
                style={{
                    backgroundImage: "url('/img/gambar kabinet.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold tracking-wide leading-tight">KABINET AKSI BERSAMA</h1>
                    <h2 className="text-4xl font-bold mt-2">BEM USU 2024/2025</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16 md:py-24">
                {/* 2. Berita Utama (Featured News) */}
                <section className="mb-16 md:mb-24">
                    <Link href="#" className="block group">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={featuredNews.imgURL}
                                    alt={featuredNews.title}
                                    objectFit="cover"
                                    className="transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {/* Detail Berita Utama */}
                            <div className="lg:-ml-8">
                                <p className="font-semibold text-green-700 text-sm uppercase tracking-wider">{featuredNews.genre}</p>
                                <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 group-hover:text-green-700 transition-colors">
                                    {featuredNews.title}
                                </h2>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {featuredNews.excerpt}
                                </p>
                                <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
                                    <Calendar size={16} />
                                    <span>{featuredNews.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>

                {/* 3. Filter Kategori dan Berita Lainnya */}
                <section>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                        <h3 className="text-3xl font-bold text-slate-800">Berita Lainnya</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 text-sm font-semibold bg-green-600 text-white rounded-full">Semua</button>
                            <button className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors">Kegiatan</button>
                            <button className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors">Prestasi</button>
                            <button className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors">Opini</button>
                        </div>
                    </div>

                    {/* Grid Berita Lainnya */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {otherNews.map((news, index) => (
                            <Link href="#" key={index} className="block group">
                                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={news.imgURL}
                                        alt={news.title}
                                        objectFit="cover"
                                        className="transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="font-semibold text-green-600 text-xs uppercase tracking-wider">{news.genre}</p>
                                    <h4 className="mt-1 text-lg font-bold text-slate-800 leading-snug group-hover:text-green-700 transition-colors">
                                        {news.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                                        <Calendar size={14} />
                                        <span>{news.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}