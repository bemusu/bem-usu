import Image from "next/legacy/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/blocks/HeroSection";
import AboutSection from "@/components/blocks/AboutSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";


const loader = async () => {
    const data = await getHomePage()

    if (!data) return notFound()

    return { ...data.data }
}

export default async function Home() {
    const data = await loader()
    const heroSectionBlock = data.blocks[0] || []
    const aboutSectionBlock = data.blocks[1] || []

    return (
        <>
            <HeroSection {...heroSectionBlock} />
            <section className="relative container mx-auto px-4 z-20">
                <div className="mt-8 md:-mt-24 flex flex-wrap justify-center gap-6">
                    {[
                        { title: "Kolaborasi", desc: "Kolaborasi Terbaik" },
                        { title: "Reformasi", desc: "Perubahan Terbaik" },
                        { title: "Solidaritas", desc: "Solidaritas Terbaik" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/50 backdrop-blur-sm border border-white/30 p-6 shadow-lg rounded-lg text-center w-full sm:w-64 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="text-cyan-800 text-3xl font-extrabold mb-2">{item.title}</div>
                            <p className="text-gray-700 font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Main Content Container */}
            <div className="container mx-auto p-4 text-gray-900 bg-gray-50">
                <div
                    className="px-4 md:px-12 py-24 space-y-16"
                >
                    <AboutSection {...aboutSectionBlock} />

                    {/* Trending News */}
                    <section className="py-8 px-4">
                        <div className="bg-white/50 backdrop-blur-md rounded-2xl text-black p-8 md:px-16 md:py-12 shadow-xl max-w-7xl mx-auto">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Trending News</h2>
                                <button className="text-sm font-semibold text-slate-800 hover:text-slate-600 flex items-center gap-1 transition-transform duration-200">
                                    VIEW ALL <span><ArrowRight /></span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2].map((_, i) => (
                                    <div key={i} className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                        <Image src={`/img/news${i + 1}.png`} alt={`News ${i}`} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
                                            <div className="bg-white text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-2">
                                                {i === 0 ? "CRYPTO" : "NEWS"}
                                            </div>
                                            <h3 className="text-lg text-white font-semibold leading-snug">
                                                {i === 0
                                                    ? "The Growing Need For Effective Password Management"
                                                    : "Write Better CSS By Borrowing Ideas From JavaScript Functions"}
                                            </h3>
                                            <div className="text-xs text-white/80 mt-2 flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} /> 27 AUGUST, 2024
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} /> 20 MINS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-white/50 p-3 transition-all duration-300 hover:shadow-md rounded-lg group cursor-pointer">
                                        <Image src="/img/news2.png" alt={`Small news ${i}`} width={96} height={96} className="w-24 h-24 object-cover rounded-md" />
                                        <div className="py-2">
                                            <div className="bg-white text-gray-800 text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-2 transition-colors">CATEGORY</div>
                                            <p className="text-sm font-semibold text-gray-900">News Title Here</p>
                                            <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                                                <Calendar size={12} /> 27 AUGUST, 2024
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

