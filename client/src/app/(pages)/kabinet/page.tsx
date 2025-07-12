import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Kabinet',
    description: 'Kumpulan Kabinet BEM Universitas Sumatera Utara.',
}

export default function KabinetPage() {
	return (
		<div className="container mx-auto p-4">
			<div className="text-center">
				<h1 className="text-4xl font-bold">
                    Ini page Kabinet
                </h1>
			</div>
			{/* Daftar anggota kabinet akan ditampilkan di sini */}
            Daftar kabinet g..
		</div>
	);
}