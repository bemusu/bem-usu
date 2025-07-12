import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Prosedur',
    description: 'Kumpulan Prosedur-Prosedur BEM Universitas Sumatera Utara.',
}

export default function ProsedurPage() {
	return (
		<div className="container mx-auto p-4">
			<div className="text-center">
				<h1 className="text-4xl font-bold">
                    Ini page Prosedur
                </h1>
			</div>
			<div className="mt-8">
				{/* Daftar prosedur akan ditampilkan di sini */}
                Daftar prosedur..
			</div>
		</div>
	);
}