import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Berita',
    description: 'Kumpulan berita dan informasi terkini dari kegiatan BEM Universitas Sumatera Utara.',
}

export default function BeritaPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    Ini page Berita
                </h1>
            </div>
            <div className="mt-8">
                {/* Daftar berita akan ditampilkan di sini */}
                Daftar Berita pra...
            </div>
        </div>
    );
}