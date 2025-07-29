"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Member = {
    name: string;
    position: string;
    image: string;
};

const cabinetData = [
    {
        department: "Badan Pengurus Harian",
        members: [
            { name: "Muzammil Ihsan", position: "Ketua BEM", image: "/img/members/news1.png" },
            { name: "Ahmad Farhan", position: "Wakil Ketua BEM", image: "/img/members/news1.png" },
            { name: "Siti Aisyah", position: "Sekretaris Umum", image: "/img/members/news1.png" },
            { name: "Budi Santoso", position: "Bendahara Umum", image: "/img/members/news1.png" },
            { name: "Dewi Lestari", position: "Staff Ahli", image: "/img/members/news1.png" },
            { name: "Eko Prasetyo", position: "Staff Ahli", image: "/img/members/news1.png" },
        ],
    },
    {
        department: "Kementerian Pengembangan",
        members: [
            { name: "Rina Amelia", position: "Menteri", image: "/img/members/news1.png" },
            { name: "Fajar Nugroho", position: "Staff Ahli", image: "/img/members/news1.png" },
            { name: "Putri Wulandari", position: "Staff", image: "/img/members/news1.png" },
            { name: "Andi Wijaya", position: "Staff", image: "/img/members/news1.png" },
        ],
    },
    {
        department: "Kementerian Pergerakan",
        members: [
            { name: "Yoga Pratama", position: "Menteri", image: "/img/members/news1.png" },
            { name: "Citra Kirana", position: "Staff", image: "/img/members/news1.png" },
            { name: "Doni Setiawan", position: "Staff", image: "/img/members/news1.png" },
        ],
    },
];

const MemberCard = ({ name, position, image }: Member) => (
    <div className="text-center group">
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
            <Image
                src={image}
                alt={`Foto ${name}`}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* PERBAIKAN DI SINI */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                <h3 className="font-bold text-lg leading-tight">{name}</h3>
                <p className="text-sm text-slate-200">{position}</p>
            </div>
        </div>
    </div>
);

export default function CabinetPage() {
    const [activeFilter, setActiveFilter] = useState(cabinetData[0].department);

    const activeDepartmentData = cabinetData.find(
        (dept) => dept.department === activeFilter
    );

    return (
        <div>
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
                <Card className="bg-white/75 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                    <div className="p-8 md:p-12">
                        <div className="flex justify-center flex-wrap gap-3 mb-12">
                            {cabinetData.map((dept) => (
                                <button
                                    key={dept.department}
                                    onClick={() => setActiveFilter(dept.department)}
                                    className={cn(
                                        "px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300",
                                        activeFilter === dept.department
                                            ? "bg-green-600 text-white shadow-md"
                                            : "bg-white/50 text-slate-700 hover:bg-white"
                                    )}
                                >
                                    {dept.department}
                                </button>
                            ))}
                        </div>

                        <section>
                            <h2 className="text-3xl font-bold text-slate-800 border-l-4 border-green-500 pl-4 mb-8">
                                {activeFilter}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                                {activeDepartmentData?.members.map((member, index) => (
                                    <MemberCard key={`${activeFilter}-${index}`} {...member} />
                                ))}
                            </div>
                        </section>
                    </div>
                </Card>
            </div>
        </div>
    );
}