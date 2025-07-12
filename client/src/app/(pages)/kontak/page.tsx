import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Kontak',
    description: 'Kontak Admin BEM Universitas Sumatera Utara.',
}

export default function KontakPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    Ini page Kontak
                </h1>
            </div>
            <form className="mt-8 max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Kirim</button>
            </form>
        </div>
    );
}