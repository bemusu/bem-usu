'use client'

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Block, DepartmentProps, ImageProps, MemberProps, MinistryProps } from "@/lib/types"
import { getDepartments, getDepartmentMembers, getMinistries, getPageBySlug } from "@/data/loaders"
import StrapiImage from "@/components/StrapiImage"
import { CabinetSkeleton } from "@/components/skeletons/CabinetSkeleton"
import { blockRenderer } from "@/components/BlockRenderer"
import { AutoCarousel } from "@/components/AutoCarousel" // Pastikan impor ini ada

type MinistryData = {
    ministry: string
    departments: {
        department_name: string
        members: MemberProps[]
    }[]
}

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
    }
    return order[position] || 99
}

const MemberCard = ({ name, position, photo }: { name: string, position: string, photo: ImageProps }) => (
    <div className="text-center group">
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
            <StrapiImage src={photo.url} alt={`Foto ${name}`} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                <h3 className="font-bold text-lg leading-tight">{name}</h3>
                <p className="text-sm text-slate-200">{position}</p>
            </div>
        </div>
    </div>
)

export default function CabinetPage() {
    const [blocks, setBlocks] = useState<Block[]>([])
    const [isBlocksLoading, setIsBlocksLoading] = useState<boolean>(true)
    const [ministries, setMinistries] = useState<MinistryProps[]>([])
    const [departments, setDepartments] = useState<DepartmentProps[]>([])
    const [members, setMembers] = useState<MemberProps[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [activeFilter, setActiveFilter] = useState<string>("")

    useEffect(() => {
        const fetchBlockData = async () => {
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
        fetchBlockData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const [ministriesRes, departmentsRes, membersRes] = await Promise.all([
                    getMinistries(),
                    getDepartments(),
                    getDepartmentMembers()
                ])
                if (ministriesRes.data && departmentsRes.data && membersRes.data) {
                    setMinistries(ministriesRes.data)
                    setDepartments(departmentsRes.data)
                    setMembers(membersRes.data)
                    if (ministriesRes.data.length > 0) {
                        setActiveFilter(ministriesRes.data[0].ministry_name)
                    }
                } else {
                    throw new Error("Gagal mengambil data kabinet.")
                }
            } catch (err) {
                setError("Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.")
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const cabinetData: MinistryData[] = ministries.map(ministry => {
        const ministryDepartments = departments
            .filter(dept => dept.ministry && dept.ministry.ministry_name === ministry.ministry_name)
            .map(dept => {
                const departmentMembers = members
                    .filter(member => member.department && member.department.department_name === dept.department_name)
                    .sort((a, b) => getPositionOrder(a.position) - getPositionOrder(b.position))
                return {
                    department_name: dept.department_name,
                    members: departmentMembers,
                }
            })
        return {
            ministry: ministry.ministry_name,
            departments: ministryDepartments,
        }
    })

    const activeMinistryData = cabinetData.find((min) => min.ministry === activeFilter)
    const heroBlock = blocks.find(block => block.__component === 'blocks.hero-section')

    return (
        <div>
            {isBlocksLoading ? (
                <div className="relative text-white text-center py-60 px-6 bg-gray-200 animate-pulse"></div>
            ) : (
                heroBlock && blockRenderer(heroBlock)
            )}
            <div className="container mx-auto px-6 py-20 md:py-2">
                <Card className="bg-white/75 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                    <div className="p-8 md:p-12">
                        {isLoading ? (
                            <CabinetSkeleton />
                        ) : error ? (
                            <div className="text-center text-red-600">{error}</div>
                        ) : (
                            <>
                                <div className="mb-12">
                                    <div className="md:hidden">
                                        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                            {ministries.map((ministry) => (
                                                <button key={ministry.documentId} onClick={() => setActiveFilter(ministry.ministry_name)} className={cn("flex-shrink-0 px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 border", activeFilter === ministry.ministry_name ? "bg-green-600 text-white border-green-600 shadow-md" : "bg-white text-slate-700 border-black/30")}>
                                                    {ministry.ministry_name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:flex justify-center flex-wrap gap-3">
                                        {ministries.map((ministry) => (
                                            <button key={ministry.documentId} onClick={() => setActiveFilter(ministry.ministry_name)} className={cn("px-5 py-2 text-base font-semibold rounded-full transition-colors duration-300 border", activeFilter === ministry.ministry_name ? "bg-green-600 text-white border-green-600 shadow-md" : "bg-white text-slate-700 border-black/30 hover:bg-green-600 hover:text-white hover:border-green-600")}>
                                                {ministry.ministry_name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {activeMinistryData?.departments.map(dept => (
                                    <section key={dept.department_name} className="mb-12">
                                        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-green-500 pl-4 mb-8">
                                            {dept.department_name}
                                        </h2>

                                        {/* Tampilan Mobile: Carousel */}
                                        <div className="md:hidden">
                                            <div className="max-w-xs mx-auto">
                                                <AutoCarousel>
                                                    {dept.members.map((member) => (
                                                        <MemberCard key={member.documentId} {...member} />
                                                    ))}
                                                </AutoCarousel>
                                            </div>
                                        </div>

                                        {/* Tampilan Desktop: Grid (Layout Awal Anda) */}
                                        <div className="hidden md:block">
                                            <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
                                                {dept.members.map((member) => (
                                                    <div key={member.documentId} className="w-60 flex-shrink-0">
                                                        <MemberCard {...member} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    )
}