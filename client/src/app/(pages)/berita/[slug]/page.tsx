'use server'

import Link from "next/link";
import { Home, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react";
import { getArticleBySlug, getArticles } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ArticleProps, Block } from "@/lib/types";
import StrapiImage from "@/components/StrapiImage";
import { blockRenderer } from "@/components/BlockRenderer";


interface PageProps {
    params: Promise<{
        slug: string
    }>
}

const loadArticle = async (slug: string) => {
    const { data } = await getArticleBySlug(slug)

    if (!data) {
        notFound()
    }

    return {
        articleDetail: data[0] as ArticleProps,
        blocks: data[0].blocks as Block[]
    }
}

const loadRelatedArticles = async (excludedSlug: string) => {
    const { data }: { data: ArticleProps[] } = await getArticles('/api/articles', undefined, undefined, undefined, undefined, excludedSlug)

    return data.slice(0, 3)
}

export default async function DetailBeritaPage({
    params
}: Readonly<PageProps>) {
    const slug = (await params).slug
    const { articleDetail, blocks } = await loadArticle(slug)
    const relatedArticles = await loadRelatedArticles(slug)

    const quoteBlock: Block | null = blocks.find(block => block.__component === 'blocks.quote-block') || null
    const contentBlock: Block | null = blocks.find(block => block.__component === 'blocks.content') || null

    return (
        <div className="bg-white text-slate-800">
            <div className="container mx-auto px-6">
                {/* Breadcrumbs */}
                <nav className="mb-8 py-4 flex items-center space-x-2 text-sm text-slate-600">
                    <Link href="/" className="hover:text-green-600"><Home size={18} /></Link>
                    <ChevronRight size={16} className="text-slate-400" />
                    <Link href="/berita" className="hover:text-green-600">Berita</Link>
                    <ChevronRight size={16} className="text-slate-400" />
                    <span className="font-semibold text-slate-800 truncate max-w-xs">{articleDetail.title}</span>
                </nav>

                {/* Header Artikel */}
                <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">{articleDetail.title}</h1>
                        <div className="mt-4 text-slate-600 text-sm">
                            <span>Oleh {articleDetail.author}</span>
                            <span className="mx-2">&bull;</span>
                            <span>{new Date(articleDetail.publishedAt).toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <StrapiImage
                            src={articleDetail.image.url}
                            alt={articleDetail.image.alternativeText}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                            width={800}
                            height={600}
                        />
                    </div>
                </header>

                <hr className="max-w-4xl mx-auto my-12 border-slate-200" />

                {/* Konten Artikel & Share Sidebar */}
                <div className="relative max-w-4xl mx-auto">
                    <aside className="hidden md:block absolute top-0 left-0 -translate-x-full pr-12">
                        <div className="sticky top-24 flex flex-col items-center space-y-4">
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500 hover:text-blue-600"><Facebook size={20} /></Link>
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500 hover:text-sky-500"><Twitter size={20} /></Link>
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500 hover:text-pink-600"><Instagram size={20} /></Link>
                        </div>
                    </aside>

                    {/* Body Artikel */}
                    <article className="prose prose-lg max-w-none prose-p:text-slate-700 prose-h2:text-slate-800 prose-blockquote:text-green-700 prose-blockquote:border-green-600">
                        {quoteBlock && blockRenderer(quoteBlock)}
                        {contentBlock && blockRenderer(contentBlock)}
                    </article>

                    {/* Share Buttons (Hanya Mobile) */}
                    <div className="md:hidden mt-12 pt-6 border-t border-slate-200">
                        <p className="text-base font-semibold text-slate-800 mb-4">Bagikan Artikel Ini</p>
                        <div className="flex items-center space-x-5">
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500"><Facebook /></Link>
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500"><Twitter /></Link>
                            <Link href="https://www.instagram.com/bem.usu/" className="text-slate-500"><Instagram /></Link>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <section className="max-w-7xl mx-auto mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Berita Lainnya</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map(article => (
                            <Link
                                key={article.documentId}
                                href={`/berita/${article.slug}`}
                                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <StrapiImage
                                    src={article.image.url}
                                    alt={article.image.alternativeText}
                                    className="w-full h-48 object-cover"
                                    width={400}
                                    height={300}
                                />
                                <div className="p-6">
                                    <p className="text-sm font-semibold text-green-700 mb-2">{article.categories[0]?.category_name || 'Berita'}</p>
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors">{article.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}