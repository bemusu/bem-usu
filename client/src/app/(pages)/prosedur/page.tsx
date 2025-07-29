import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Handshake, Home } from "lucide-react"; 

const sopData = [
    {
        title: "Penerimaan Kerja Sama",
        icon: <Handshake className="w-12 h-12 text-green-600" />,
        link: "/prosedur/kerja-sama" 
    },
    {
        title: "Asrama Putra/Putri",
        icon: <Home className="w-12 h-12 text-green-600" />,
        link: "/sop/sop asrama.pdf" 
    },
];

export default function ProsedurPage() {
    return (
        <div
            className="bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/img/backgroundbem.png')" }}
        >
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

            {/* 2. KONTEN UTAMA */}
            <div className="container mx-auto px-6 py-20 md:py-28">
                <div className="max-w-3xl mx-auto">
                    {/* Judul Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">Standar Operasional Prosedur</h2>
                    </div>

                    {/* Daftar Kartu Prosedur */}	
                    <div className="space-y-6">
                        {sopData.map((sop, index) => (
                            <Card key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200/80 hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6 flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0 w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                                            {sop.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">{sop.title}</h3>
                                        </div>
                                    </div>
                                    <Link href={sop.link} className="shrink-0 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors">
                                        Baca SOP
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}