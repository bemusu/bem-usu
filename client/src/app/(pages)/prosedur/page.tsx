import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Handshake, Home, FileText, Search } from "lucide-react";

const sopData = [
    {
        title: "Penerimaan Kerja Sama",
        icon: <Handshake className="w-12 h-12 text-green-600" />,
        link: "/sop/sop asmara.pdf"
    },
    {
        title: "Asrama Putra/Putri",
        icon: <Home className="w-12 h-12 text-green-600" />,
        link: "/sop/sop asmara.pdf"
    },
    {
        title: "Pengajuan Proposal",
        icon: <FileText className="w-12 h-12 text-green-600" />,
        link: "/sop/sop asmara.pdf"
    },
    
];

export default function ProsedurPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSop = sopData.filter(sop =>
        sop.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50">
            <section
                className="relative text-white text-center py-40 px-6"
                style={{
                    backgroundImage: "url('/img/gambar kabinet.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold tracking-wide leading-tight">KABINET AKSI BERSAMA</h1>
                    <h2 className="text-4xl font-bold mt-2">BEM USU 2024/2025</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat
                    </p>
                    <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg">
                        Selengkapnya
                    </button>
                </div>
            </section>

            {/* 2. KONTEN UTAMA */}
            <div className="container mx-auto px-6 py-20 md:py-28">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold">Standar Operasional Prosedur</h2>
                    </div>

                    <div className="relative max-w-2xl mx-auto mb-16">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari prosedur..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-full shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Daftar Kartu Prosedur */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {filteredSop.length > 0 ? (
                            filteredSop.map((sop, index) => (
                                <Card key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200/80 hover:shadow-xl transition-shadow duration-300">
                                    <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="flex-shrink-0 w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                                                {sop.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800">{sop.title}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <Link href={sop.link} className="px-5 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm">
                                                Baca SOP
                                            </Link>
                                            <Link href="/lapor" className="px-5 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm">
                                                Lapor
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center text-slate-500 col-span-full">Prosedur tidak ditemukan.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}