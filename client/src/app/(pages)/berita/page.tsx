'use client'

import Link from "next/link";
import { Calendar, AlertTriangle, RefreshCw } from "lucide-react";
import { getArticles, getCategories, getPageBySlug } from "@/data/loaders";
import { ArticleProps, Block, CategoryProps } from "@/lib/types";
import { blockRenderer } from "@/components/BlockRenderer";
import { useCallback, useEffect, useState } from "react";
import StrapiImage from "@/components/StrapiImage";
import { FeaturedArticleSkeleton } from "@/components/skeletons/FeaturedArticleSkeleton";
import { ArticleCardSkeleton } from "@/components/skeletons/ArticleCardSkeleton";
import { CategoryFilterSkeleton } from "@/components/skeletons/CategoryFilterSkeleton";
import { Pagination } from "@/components/ui/pagination";


interface PaginationMeta {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}


export default function BeritaPage() {
    const [blocks, setBlocks] = useState<Block[]>([])
    const [isBlocksLoading, setIsBlocksLoading] = useState<boolean>(true)

    const [articles, setArticles] = useState<ArticleProps[]>([])
    const [randomFeaturedArticle, setRandomFeaturedArticle] = useState<ArticleProps | null>(null)
    const [isArticleLoading, setIsArticleLoading] = useState<boolean>(true)

    const [categories, setCategories] = useState<CategoryProps[]>([])
    const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(true)

    const [page, setPage] = useState<number>(1)
    const [pagination, setPagination] = useState<PaginationMeta | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [error, setError] = useState<string>('')

    const handleRefresh = () => {
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsBlocksLoading(true)
            try {
                const { data } = await getPageBySlug('berita')

                if (!data) {
                    console.error(`[BeritaPage] Error: Data Kosong!`)
                    setError('Gagal mengambil data halaman.')
                    setBlocks([])
                }

                setBlocks(data[0].blocks)
            } catch (error) {
                console.error(`[BeritaPage] Error: ${error}`)
                setError('Gagal mengambil data halaman.')
                setBlocks([])
            } finally {
                setIsBlocksLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchCategories = async () => {
            setIsCategoriesLoading(true)
            try {
                const { data } = await getCategories()

                if (!data) {
                    setError("Gagal mengambil data kategori.")
                    console.error("Tidak ada data kategori")
                }

                setCategories(data)
            } catch (error) {
                setError("Gagal mengambil data kategori.")
                console.error(`[fetchCategories] Error: ${error}`)
            } finally {
                setIsCategoriesLoading(false)
            }
        }

        fetchCategories()
    }, [])

    const fetchArticles = useCallback(async (path: string, searchTerm?: string, page?: number, category?: string, featured?: boolean) => {
        setIsArticleLoading(true)
        setError("")
        try {
            const { data, meta } = await getArticles(path, featured, searchTerm, page, category)

            if (!data) {
                setError("Gagal mengambil data artikel.")
                setArticles([])
                setPagination(null)
            }

            setArticles(data)
            setPagination(meta.pagination)
        } catch (error) {
            setError("Terjadi kesalahan. Harap periksa koneksi anda!")
            console.error(`[fetchArticles] Error: ${error}`)
            setArticles([])
            setPagination(null);
        } finally {
            setIsArticleLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchArticles('/api/articles', searchTerm, page, selectedCategory)
    }, [searchTerm, page, selectedCategory, fetchArticles])

    useEffect(() => {
        const featuredArticles: ArticleProps[] = articles.filter(article => article.featured) || []

        if (featuredArticles.length > 0) {
            setRandomFeaturedArticle(featuredArticles[Math.floor(Math.random() * featuredArticles.length)])
        } else {
            setRandomFeaturedArticle(articles.length > 0 ? articles[0] : null)
        }
    }, [articles])

    const heroBlock = blocks.find(block => block.__component === 'blocks.hero-section')
    const otherArticles = articles.filter(article => article.id !== randomFeaturedArticle?.id);

    const handlePageChange = (newPage: number) => {
        setPage(newPage)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {isBlocksLoading ? (
                <div className="relative text-white text-center py-60 px-6 bg-gray-200 animate-pulse"></div>
            ) : (
                heroBlock && blockRenderer(heroBlock)
            )}

            <div className="container mx-auto px-6 py-16 md:py-24">
                {error ? (
                    <div className="text-center p-8 bg-red-50 text-red-700 rounded-lg flex flex-col items-center gap-4">
                        <AlertTriangle className="w-12 h-12" />
                        <h2 className="text-2xl font-bold">Terjadi Kesalahan</h2>
                        <p>{error}</p>
                        <button
                            onClick={handleRefresh}
                            className="mt-4 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                        >
                            <RefreshCw size={18} />
                            <span>Coba Lagi</span>
                        </button>
                    </div>
                ) : (
                    <>
                        <section className="mb-16 md:mb-24">
                            {isArticleLoading ? <FeaturedArticleSkeleton /> : randomFeaturedArticle ? (
                                <Link href={`/berita/${randomFeaturedArticle.slug}`} className="block group">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                                            <StrapiImage
                                                src={randomFeaturedArticle.image.url}
                                                alt={randomFeaturedArticle.image.alternativeText}
                                                className="transform group-hover:scale-105 transition-transform duration-500"
                                                objectFit="cover"
                                                layout="fill"
                                            />
                                        </div>
                                        <div className="lg:-ml-8">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {randomFeaturedArticle.categories.map(category => (
                                                    <span key={category.documentId} className="font-semibold text-green-600 text-xs uppercase tracking-wider">
                                                        {category.category_name}
                                                    </span>
                                                ))}
                                            </div>
                                            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 group-hover:text-green-700 transition-colors">
                                                {randomFeaturedArticle.title}
                                            </h2>
                                            <p className="mt-4 text-slate-600 leading-relaxed">
                                                {randomFeaturedArticle.description.slice(0, 144)}...
                                            </p>
                                            <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
                                                <Calendar size={16} />
                                                <span>{new Date(randomFeaturedArticle.createdAt).toLocaleDateString('id-ID', { year: "numeric", month: 'long', day: "numeric" })}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="text-center p-8 bg-slate-100 rounded-lg">
                                    <p>Tidak ada berita utama yang tersedia saat ini.</p>
                                </div>
                            )}
                        </section>

                        <section>
                            {isCategoriesLoading ? <CategoryFilterSkeleton /> : (
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                                    <h3 className="text-3xl font-bold text-slate-800">Berita Lainnya</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedCategory("")}
                                            className={`px-4 py-2 text-sm font-semibold rounded-full ${selectedCategory === "" ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors'}`}
                                        >
                                            Semua
                                        </button>
                                        {categories.map(category => (
                                            <button
                                                key={category.documentId}
                                                onClick={() => setSelectedCategory(category.slug)}
                                                className={`px-4 py-2 text-sm font-semibold rounded-full ${selectedCategory === category.slug ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors'}`}
                                            >
                                                {category.category_name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {isArticleLoading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <ArticleCardSkeleton key={index} />
                                    ))}
                                </div>
                            ) : otherArticles.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                    {otherArticles.map(article => (
                                        <Link href={`/berita/${article.slug}`} key={article.slug} className="block group">
                                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                                                <StrapiImage
                                                    src={article.image.url}
                                                    alt={article.image.alternativeText}
                                                    objectFit="cover"
                                                    className="transform group-hover:scale-105 transition-transform duration-500"
                                                    layout="fill"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex flex-wrap gap-1 mb-1">
                                                    {article.categories.map((category, i) => (
                                                        <span key={category.documentId} className="font-semibold text-green-600 text-xs uppercase tracking-wider">
                                                            {category.category_name}
                                                            {i < article.categories.length - 1 && (<span className="mx-1">/</span>)}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h4 className="mt-1 text-lg font-bold text-slate-800 leading-snug group-hover:text-green-700 transition-colors">
                                                    {article.title}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                                                    <Calendar size={14} />
                                                    <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center col-span-full py-12">
                                    <p className="text-slate-500">Tidak ada berita lainnya yang ditemukan dalam kategori ini.</p>
                                </div>
                            )}

                            {pagination && pagination.pageCount > 1 && !isArticleLoading && (
                                <Pagination
                                    currentPage={page}
                                    totalPages={pagination.pageCount}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </section>
                    </>
                )}
            </div>
        </div>
    );
}