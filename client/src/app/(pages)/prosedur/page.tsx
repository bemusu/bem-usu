'use client'

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Search, AlertTriangle, RefreshCw } from "lucide-react"
import { ProsedurProps } from "@/lib/types"
import { getProsedurs } from "@/data/loaders"
import StrapiImage from "@/components/StrapiImage"
import { getStrapiMedia } from "@/components/StrapiImage"
import { ProsedurCardSkeleton } from "@/components/skeletons/ProsedurCardSkeleton"


export default function ProsedurPage() {
    const [prosedurs, setProsedurs] = useState<ProsedurProps[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")

    const handleRefresh = () => window.location.reload()

    const fetchProsedurs = useCallback(async (query: string) => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await getProsedurs(query)
            if (data) {
                setProsedurs(data)
            } else {
                throw new Error("Gagal mengambil data prosedur.")
            }
        } catch (err) {
            setError("Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.")
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            fetchProsedurs(searchTerm)
        }, 500)

        return () => clearTimeout(debounceTimer)
    }, [searchTerm, fetchProsedurs])

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
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

            {/* Konten Utama */}
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
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, index) => <ProsedurCardSkeleton key={index} />)
                        ) : error ? (
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
                        ) : prosedurs.length > 0 ? (
                            prosedurs.map((prosedur) => (
                                <Card key={prosedur.documentId} className="bg-white rounded-2xl shadow-lg border border-slate-200/80 hover:shadow-xl transition-shadow duration-300">
                                    <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="flex-shrink-0 w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                                                <StrapiImage
                                                    src={prosedur.icon.url}
                                                    alt={prosedur.icon.alternativeText || "icon"}
                                                    className="w-12 h-12 text-green-600"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800">{prosedur.prosedur_name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <Link
                                                href={getStrapiMedia(prosedur.berkas.url) || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm"
                                            >
                                                Baca SOP
                                            </Link>
                                            <Link href="/kontak" className="px-5 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm">
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
    )
}