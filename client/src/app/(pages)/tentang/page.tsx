import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Tentang',
    description: 'Visi dan Misi BEM Universitas Sumatera Utara.',
}

export default function TentangPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Ini page Tentang</h1>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Visi & Misi</h2>
                {/* Konten Visi & Misi */}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Program Kerja Unggulan</h2>
                {/* Konten Program Kerja Unggulan */}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Filosofi Logo dan Nama Kabinet</h2>
                {/* Konten Filosofi Logo dan Nama Kabinet */}
            </div>
        </div>
    )
}