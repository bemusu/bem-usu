'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react"
import { useFormStatus } from "react-dom"
import { useActionState, useEffect, useState } from "react"
import { createReportAction } from "@/data/actions/report-actions"
import { Block } from "@/lib/types"
import { getPageBySlug } from "@/data/loaders"
import { blockRenderer } from "@/components/BlockRenderer"
import ContactInformation from "@/components/blocks/ContactInformation"


const INITIAL_STATE = {
    ZodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: null
}

const FormInput = ({ name, placeholder, type = "text", error }: { name: string, placeholder: string, type?: string, error?: string[] }) => (
    <div className="w-full">
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-green-600 focus:ring-0 transition-colors pb-2"
            aria-invalid={!!error}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error[0]}</p>}
    </div>
)

const FormTextarea = ({ name, placeholder, rows = 4, error }: { name: string, placeholder: string, rows?: number, error?: string[] }) => (
    <div className="w-full">
        <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
            className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-green-600 focus:ring-0 transition-colors pb-2"
            aria-invalid={!!error}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error[0]}</p>}
    </div>
)

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className="w-full bg-slate-900 text-white hover:bg-slate-700 transition-colors text-base py-6 rounded-lg cursor-pointer"
            disabled={pending}
        >
            {pending ? "Mengirim..." : "Kirim Pesan"}
        </Button>
    )
}

// KOMPONEN HALAMAN UTAMA
export default function ContactPage() {
    const [blocks, setBlocks] = useState<Block[]>([])
    const [isBlocksLoading, setIsBlockLoading] = useState<boolean>(true)

    const [formState, formAction] = useActionState(createReportAction, INITIAL_STATE)

    useEffect(() => {
        const fetchPageData = async () => {
            setIsBlockLoading(true)

            try {
                const { data } = await getPageBySlug('kontak')

                if (!data) {
                    setBlocks([])
                    console.error("[ProsedurPage] Error: Halaman 'prosedur' tidak ditemukan atau tidak memiliki blok.");
                }

                setBlocks(data[0].blocks)
            } catch (error) {
                console.error(`[KontakPage] Gagal mengambil data halaman: ${error}`)
            } finally {
                setIsBlockLoading(false)
            }
        }

        fetchPageData()
    }, [])

    const heroBlock = blocks.find(block => block.__component === 'blocks.hero-section')
    const contactInfoBlock = blocks.find(block => block.__component === 'blocks.contact-information')

    return (
        <div>
            {isBlocksLoading ? (
                <div className="relative text-white text-center py-60 px-6 bg-gray-200 animate-pulse"></div>
            ) : (
                heroBlock && blockRenderer(heroBlock)
            )}

            {/* Konten Utama dalam Card */}
            <div className="container mx-auto px-6 py-20 md:py-28">
                <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Kolom Kiri: Informasi Kontak */}
                        {contactInfoBlock && blockRenderer(contactInfoBlock)}

                        {/* Kolom Kanan: Formulir */}
                        <div className="p-8 md:p-12 border-l border-slate-200/80">
                            <form action={formAction} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FormInput name="name" placeholder="Nama" error={formState.zodErrors?.name} />
                                    <FormInput name="nim" placeholder="NIM" error={formState.zodErrors?.nim} />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FormInput name="faculty" placeholder="Fakultas" error={formState.zodErrors?.faculty} />
                                    <FormInput name="program_study" placeholder="Prodi" error={formState.zodErrors?.program_study} />
                                </div>
                                <FormInput name="whatsapp_number" placeholder="No Whatsapp (+628...)" error={formState.zodErrors?.whatsapp_number} />
                                <FormInput name="problem_category" placeholder="Kategori Masalah" error={formState.zodErrors?.problem_category} />
                                <FormInput name="date" placeholder="Tanggal Kejadian" type="date" error={formState.zodErrors?.date} />
                                <FormTextarea name="message" placeholder="Tulis Pesan..." error={formState.zodErrors?.message} />

                                <SubmitButton />

                                {formState.successMessage && <p className="text-green-600 bg-green-50 p-3 rounded-lg text-center">{formState.successMessage}</p>}
                                {formState.errorMessage && <p className="text-red-600 bg-red-50 p-3 rounded-lg text-center">{formState.errorMessage}</p>}
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}