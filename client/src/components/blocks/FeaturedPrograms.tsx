import { Card } from "../ui/card";
import { FeaturedProgramsProps } from "@/lib/types";
import StrapiImage from "../StrapiImage";


const FeaturedPrograms = ({
    title,
    programs
}: Readonly<FeaturedProgramsProps>) => {
    return (
        <div className="mb-20 md:mb-28">
            <Card className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                <div className="p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-slate-800">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                        {programs.map(program => (
                            <div
                                key={program.id}
                                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                {/* Gambar background dengan efek rotasi saat hover */}
                                <StrapiImage
                                    src={program.image.url}
                                    alt={program.image.alternativeText || "card-img"}
                                    className="transform transition-transform duration-700 ease-in-out group-hover:rotate-3 group-hover:scale-105 grayscale"
                                    layout="fill"
                                    objectFit="cover"
                                />

                                {/* Overlay gelap saat hover */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 z-10"></div>

                                {/* Konten utama (icon + title) */}
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300 group-hover:opacity-0">
                                    <div className="bg-green-400 p-4 rounded-xl mb-4">
                                        <StrapiImage 
                                            src={program.icon.url}
                                            alt={program.icon.alternativeText || "card-icon"}
                                            className="text-red-800"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <p className="font-bold text-xl text-center drop-shadow-md">
                                        {program.title}
                                    </p>
                                </div>

                                {/* Deskripsi yang muncul saat hover */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    <p className="text-white text-md leading-relaxed drop-shadow-md">
                                        {program.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default FeaturedPrograms