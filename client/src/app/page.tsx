import { Calendar, ArrowRight } from "lucide-react";
import HeroSection from "@/components/blocks/HeroSection";
import AboutSection from "@/components/blocks/AboutSection";
import { getArticles, getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ArticleProps } from "@/lib/types";
import Link from "next/link";
import StrapiImage from "@/components/StrapiImage";


const loader = async () => {
    const data = await getHomePage()

    if (!data) return notFound()

    return { ...data.data }
}

const loadFeatauredArticle = async (): Promise<ArticleProps[]> => {
    const { data } = await getArticles('/api/articles', true, undefined, undefined, undefined, undefined, 5)

    return data
}

export default async function Home() {
    const data = await loader()
    const featuredArticles = await loadFeatauredArticle()

    const heroSectionBlock = data.blocks[0] || []
    const aboutSectionBlock = data.blocks[1] || []

    const mainArticles = featuredArticles.slice(0, 2)
    const smallArticles = featuredArticles.slice(2, 5)

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
            <div className="container text-gray-900 bg-gray-50">
                <div
                    className="py-24 space-y-16"
                >
                    <AboutSection {...aboutSectionBlock} />

                    {/* Trending Article */}
                    {featuredArticles && featuredArticles.length > 0 && (
                        <section className="py-8">
                            <div className="bg-white/50 backdrop-blur-md rounded-2xl text-black p-8 md:px-16 md:py-12 shadow-xl max-w-7xl mx-auto">
                                <div className="flex items-center justify-between mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Artikel Unggulan</h2>
                                    <Link href="/berita" className="text-sm font-semibold text-slate-800 hover:text-slate-600 flex items-center gap-1 transition-transform duration-200">
                                        LIHAT SEMUA <span><ArrowRight /></span>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {mainArticles.map(article => (
                                        <Link href={`/berita/${article.slug}`} key={article.id} className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                            <StrapiImage src={article.image.url} alt={article.image.alternativeText || article.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
                                                <div className="bg-white text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-2">
                                                    {article.categories[0]?.category_name || "Berita"}
                                                </div>
                                                <h3 className="text-lg text-white font-semibold leading-snug">
                                                    {article.title}
                                                </h3>
                                                <div className="text-xs text-white/80 mt-2 flex items-center gap-4">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} /> {new Date(article.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {smallArticles.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                        {smallArticles.map(article => (
                                            <Link
                                                href={`/berita/${article.slug}`}
                                                key={article.id}
                                                className="flex gap-4 items-center bg-white/50 p-3 transition-all ease-in-out duration-500 hover:shadow-md hover:bg-green-800 rounded-lg group cursor-pointer"
                                            >
                                                <StrapiImage
                                                    src={article.image.url}
                                                    alt={article.image.alternativeText || article.title}
                                                    width={96}
                                                    height={96}
                                                    className="w-24 h-24 object-cover rounded-md"
                                                />
                                                <div className="py-2">
                                                    {/* Kategori ini akan tetap putih dengan background hijau tua */}
                                                    <div
                                                        className="bg-white text-gray-800 text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-2 transition-colors group-hover:bg-white/90 group-hover:text-green-800"
                                                    >
                                                        {article.categories[0]?.category_name || "Kategori"}
                                                    </div>

                                                    {/* Judul artikel */}
                                                    <p className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-white">
                                                        {article.title}
                                                    </p>

                                                    {/* Tanggal */}
                                                    <div className="text-xs text-gray-600 mt-1 flex items-center gap-1 transition-colors group-hover:text-gray-200">
                                                        <Calendar size={12} />
                                                        {new Date(article.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}

