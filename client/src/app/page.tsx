import Image from "next/image";

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<div className="text-center">
				<h1 className="text-4xl font-bold">
					Ini Page Beranda.
				</h1>
			</div>
			<div className="mt-8">
				<h2 className="text-2xl font-semibold">
					Tentang
				</h2>
				<p>
					BEM adalah wadah bagi mahasiswa untuk mengembangkan diri di luar kegiatan akademik...
				</p>
			</div>
			<div className="mt-8">
				<h2 className="text-2xl font-semibold">Berita Terbaru</h2>
				{/*
					* Konten berita terbaru disini ygy
				*/}
			</div>
		</div>
	);
}
