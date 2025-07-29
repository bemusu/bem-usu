import Image from "next/legacy/image";
import { Card } from "@/components/ui/card";
import { ChevronRight, Award, Home, MessageSquare, BookOpen, Users, Search } from "lucide-react";

const prokerUnggulan = [
    { title: "SI BEM", image: "/img/news1.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <Award className="w-8 h-8 text-slate-800" /> },
    { title: "BEM CONNECT", image: "/img/news.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <Home className="w-8 h-8 text-slate-800" /> },
    { title: "Rumah Prestasi dan Beasiswa", image: "/img/news2.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <MessageSquare className="w-8 h-8 text-slate-800" /> },
    { title: "Curhat Akademis", image: "/img/sports1.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <BookOpen className="w-8 h-8 text-slate-800" /> },
    { title: "BEM In Action", image: "/img/sports2.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <Users className="w-8 h-8 text-slate-800" /> },
    { title: "Arutala Fest", image: "/img/sports3.png", description: "Mengembangkan solusi kreatif untuk masalah sosial di masyarakat.", icon: <Search className="w-8 h-8 text-slate-800" /> },
];

const filosofiLogo = [
    { title: "Green Leaf", description: "Daun hijau yang mengelilingi api melambangkan pertumbuhan, kesuburan, dan harapan baru.", image: "/img/leaf.png" },
    { title: "Inferno Grip", description: "Simbol api dengan kepalan tangan melambangkan semangat perjuangan dan keberanian.", image: "/img/fire.png" },
    { title: "Ethereal Blue", description: "Pondasi biru di dasar api melambangkan stabilitas, kepercayaan, dan kebijaksanaan.", image: "/img/water.png" },
];

const misiList = [
    "Mewujudkan internal BEM USU yang kuat, sinergis, harmonis, dan berkualitas.",
    "Meningkatkan kolaborasi dan solidaritas antar ORMAWA.",
    "Melaksanakan tugas pengelolaan BEM USU yang transparan dan akuntabel.",
    "Memfasilitasi pengembangan akademik, minat, dan bakat mahasiswa.",
    "Memperjuangkan hak mahasiswa dan aktif merespon isu-isu strategis."
];

export default function AboutPage() {
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

            <div className="container mx-auto px-6 py-20 md:py-28">

                {/* 2. Visi & Misi */}
                <div className="mb-20 md:mb-28">
                    <Card className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div>
                                    <p className="font-bold text-green-500 uppercase tracking-widest text-sm mb-4">SIAPA KAMI</p>
                                    <div className="mb-10">
                                        <h2 className="text-4xl font-bold text-slate-800">Visi Kami</h2>
                                        <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                                            Terwujudnya lembaga eksekutif yang aktif, responsif, dan konstruktif dalam gerakan, pengabdian, pelayanan serta pengembangan minat dan bakat mahasiswa untuk USU dan Indonesia.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-bold text-slate-800">Misi Kami</h2>
                                        <ul className="mt-6 space-y-4">
                                            {misiList.slice(0, 4).map((misi, index) => (
                                                <li key={index} className="flex items-start gap-4">
                                                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                        <ChevronRight className="w-5 h-5 text-green-600" />
                                                    </span>
                                                    <span className="text-slate-600">{misi}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
                                    <Image
                                        src="/img/tesgambar.png"
                                        alt="Tim BEM USU"
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-2xl"
                                    />
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>

                <div className="mb-20 md:mb-28">
                    <Card className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                        <div className="p-8 md:p-12">
                            <h2 className="text-4xl font-bold text-slate-800">Program Unggulan</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                                {prokerUnggulan.map((proker, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group cursor-pointer"
                                    >
                                        {/* Gambar background dengan efek rotasi saat hover */}
                                        <Image
                                            src={proker.image}
                                            alt={proker.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transform transition-transform duration-700 ease-in-out group-hover:rotate-3 group-hover:scale-105 grayscale"
                                        />

                                        {/* Overlay gelap saat hover */}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 z-10"></div>

                                        {/* Konten utama (icon + title) */}
                                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300 group-hover:opacity-0">
                                            <div className="bg-green-400 p-4 rounded-xl mb-4">
                                                {proker.icon}
                                            </div>
                                            <p className="font-bold text-xl text-center drop-shadow-md">
                                                {proker.title}
                                            </p>
                                        </div>

                                        {/* Deskripsi yang muncul saat hover */}
                                        <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                            <p className="text-white text-md leading-relaxed drop-shadow-md">
                                                {proker.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>


                {/* 4. Filosofi Logo */}
                <div className="mb-20 md:mb-28">
                    <Card className="bg-gradient-to-br from-white/80 to-slate-100/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200">
                        <div className="p-8 md:p-12">

                            {/* Judul utama */}
                            <h2 className="text-4xl font-bold text-slate-800 text-center md:text-left mb-12">
                                Filosofi Logo
                            </h2>

                            <div className="flex flex-col md:flex-row md:gap-12">
                                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-300 flex flex-col items-center justify-center px-6 pb-10 md:pb-0">
                                    <Image
                                        src="/img/logo kabinet.png"
                                        alt="Logo Kabinet"
                                        width={160}
                                        height={160}
                                        className="rounded-xl shadow-md mb-6"
                                    />
                                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Aksi Bersama</h3>
                                    <p className="text-slate-600 text-center max-w-xs">
                                        Bergerak bersama dengan semangat kolaborasi untuk menciptakan perubahan positif.
                                    </p>
                                </div>

                                <div className="md:w-2/3 pt-10 md:pt-0 px-6">
                                    <div className="space-y-10">
                                        {filosofiLogo.slice(0, 3).map((item, index) => (
                                            <div key={index} className="flex items-start gap-6">
                                                <div className="w-20 h-20 rounded-xl bg-yellow-50 flex items-center justify-center shadow-inner shrink-0">
                                                    <Image src={item.image} alt={item.title} width={48} height={48} />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-xl text-slate-800">{item.title}</h4>
                                                    <p className="text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}