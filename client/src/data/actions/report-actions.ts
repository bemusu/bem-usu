'use server'

import { fetchAPI } from "@/lib/fetch-api"
import { getStrapiUrl } from "@/lib/utils"
import z from "zod"


const BASE_URL = getStrapiUrl()

const reportSchema = z.object({
    name: z.string().min(1, { message: "Nama wajib diisi" }),
    nim: z.string().min(1, ({ message: "NIM wajib diisi" })),
    faculty: z.string().min(1, { message: "Fakultas wajib diisi" }),
    program_study: z.string().min(1, { message: "Program Studi wajib diisi" }),
    whatsapp_number: z.string().min(10, { message: "Nomor WhatsApp tidak valid" }),
    problem_category: z.string().min(1, { message: "Kategori masalah wajib diisi" }),
    date: z.string().min(1, { message: "Tanggal kejadian wajib diisi" }),
    message: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
})


const createReportService = async (data: z.infer<typeof reportSchema>) => {
    const url = new URL('/api/reports', BASE_URL)

    try {
        const res = await fetchAPI(url.href, {
            method: 'POST',
            body: { data }
        })

        return res
    } catch (error) {
        console.error("Create Report Service Error:", error);
        throw new Error("Gagal mengirim laporan ke server.");
    }
}

export const createReportAction = async (prevState: any, formData: FormData) => {
    const rawData = {
        name: formData.get('name'),
        nim: formData.get('nim'),
        faculty: formData.get("faculty"),
        program_study: formData.get("program_study"),
        whatsapp_number: formData.get("whatsapp_number"),
        problem_category: formData.get("problem_category"),
        date: formData.get("date"),
        message: formData.get("message"),
    }

    const validatedFields = reportSchema.safeParse(rawData)

    if (!validatedFields.success) {
        console.dir(validatedFields.error.flatten().fieldErrors, { depth: null })

        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiError: null,
            successMessage: null,
            errorMessage: "Gagal mengirim pesan. Periksa kembali isian Anda."
        }
    }

    try {
        const res = await createReportService(validatedFields.data)

        if (res?.error) {
            return {
                ...prevState,
                zodErrors: null,
                strapiErrors: res.error,
                errorMessage: res.error.message || "Terjadi kesalahan pada server Strapi.",
                successMessage: null,
            }
        }

        return {
            ...prevState,
            zodErrors: null,
            strapiErrors: null,
            successMessage: "Laporan Anda berhasil dikirim. Terima kasih!",
            errorMessage: null,
        };
    } catch (error: any) {
        return {
            ...prevState,
            errorMessage: error.message || "Terjadi kesalahan internal. Silakan coba lagi.",
            successMessage: null,
        }
    }
}