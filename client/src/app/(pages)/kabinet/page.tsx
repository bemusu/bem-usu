'use client'

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DepartmentProps, ImageProps, MemberProps } from "@/lib/types";
import { getDepartments, getDepartmentMembers } from "@/data/loaders";
import StrapiImage from "@/components/StrapiImage";
import { Skeleton } from "@/components/ui/skeleton";

type CabinetData = {
    department: string;
    members: MemberProps[];
};

const getPositionOrder = (position: string) => {
    const order: { [key: string]: number } = {
        "Ketua BEM": 1,
        "Wakil Ketua BEM": 2,
        "Kepala Staff BEM": 3,
        "Sekretaris Kabinet": 4,
        "Sekretaris BEM": 5,
        "Bendahara Umum": 6,
        "Wakil Bendahara Umum": 7,
        "Koordinator": 8,
        "Sekretaris Koordinator": 9,
        "Kepala Departemen": 10,
        "Sekretaris Departemen": 11,
        "Staff": 12,
    };

    return order[position] || 99;
};


const MemberCard = ({ name, position, photo }: { name: string, position: string, photo: ImageProps }) => (
    <div className="text-center group">
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
            <StrapiImage
                src={photo.url}
                alt={`Foto ${name}`}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                <h3 className="font-bold text-lg leading-tight">{name}</h3>
                <p className="text-sm text-slate-200">{position}</p>
            </div>
        </div>
    </div>
);

const CabinetSkeleton = () => (
    <div>
        <div className="flex justify-center flex-wrap gap-3 mb-12">
            <Skeleton className="h-9 w-40 rounded-full" />
            <Skeleton className="h-9 w-32 rounded-full" />
            <Skeleton className="h-9 w-48 rounded-full" />
        </div>
        <Skeleton className="h-8 w-64 mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="space-y-2">
                    <Skeleton className="aspect-[4/5] w-full rounded-2xl" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
            ))}
        </div>
    </div>
)

export default function CabinetPage() {
    const [departments, setDepartments] = useState<DepartmentProps[]>([]);
    const [members, setMembers] = useState<MemberProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const deptsResponse = await getDepartments();
                const membersResponse = await getDepartmentMembers();

                if (deptsResponse.data && membersResponse.data) {
                    setDepartments(deptsResponse.data);
                    setMembers(membersResponse.data);
                    if (deptsResponse.data.length > 0) {
                        setActiveFilter(deptsResponse.data[0].department_name);
                    }
                } else {
                    throw new Error("Gagal mengambil data kabinet.");
                }
            } catch (err) {
                setError("Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const cabinetData: CabinetData[] = departments.map(dept => ({
        department: dept.department_name,
        members: members
            .filter(member =>
                member.department && member.department.department_name === dept.department_name
            )
            .sort((a, b) => getPositionOrder(a.position) - getPositionOrder(b.position))
    }));

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

            <div className="container mx-auto px-6 py-20 md:py-2">
                <Card className="bg-white/75 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                    <div className="p-8 md:p-12">
                        {isLoading ? (
                            <CabinetSkeleton />
                        ) : error ? (
                            <div className="text-center text-red-600">{error}</div>
                        ) : (
                            <>
                                <div className="flex justify-center flex-wrap gap-3 mb-12">
                                    {cabinetData.map((dept) => (
                                        <button
                                            key={dept.department}
                                            onClick={() => setActiveFilter(dept.department)}
                                            className={cn(
                                                "px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 border",
                                                activeFilter === dept.department
                                                    ? "bg-green-600 text-white border-green-600 shadow-md"
                                                    : "bg-white text-slate-700 border-black/30 hover:bg-green-600 hover:text-white hover:border-green-600"
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
                                        {activeDepartmentData?.members.map((member) => (
                                            <MemberCard key={member.documentId} {...member} />
                                        ))}
                                    </div>
                                </section>
                            </>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}