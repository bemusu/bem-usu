import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react";

const articleData = {
    title: "BEM USU Sukses Gelar Webinar Nasional Kewirausahaan Digital",
    author: "Admin BEM USU",
    publishDate: "29 Juli 2025",
    imageUrl: "/img/news1.png",
    subtitle: "Sebuah langkah maju dalam mempersiapkan generasi muda menjadi pemimpin di dunia bisnis digital.",
    body: `
        <p>Badan Eksekutif Mahasiswa Universitas Sumatera Utara (BEM USU) kembali menunjukkan komitmennya dalam pengembangan potensi mahasiswa dengan menyelenggarakan Webinar Nasional Kewirausahaan Digital. Acara yang diadakan secara daring ini berhasil menarik partisipasi ribuan mahasiswa dari berbagai penjuru Indonesia.</p>
        <p>Menghadirkan pembicara-pembicara ahli di bidangnya, webinar ini mengupas tuntas berbagai strategi dan tantangan dalam membangun bisnis di era digital. Para peserta mendapatkan wawasan mendalam mengenai tren pasar terkini, pemanfaatan media sosial untuk branding, hingga manajemen keuangan untuk startup.</p>
        <h2>Materi yang Mendalam dan Relevan</h2>
        <p>Salah satu sorotan utama adalah sesi yang membahas tentang pentingnya inovasi dan adaptasi. Para pembicara menekankan bahwa dunia digital bergerak sangat cepat, dan para wirausahawan muda harus mampu beradaptasi dengan perubahan agar tetap relevan dan kompetitif.</p>
        <blockquote>"Jangan takut untuk gagal, karena kegagalan adalah bagian dari proses belajar. Yang terpenting adalah bagaimana kita bangkit dan belajar dari setiap kesalahan," ujar salah satu pembicara, yang merupakan CEO dari sebuah startup unicorn ternama.</blockquote>
        <p>Acara ini tidak hanya berfokus pada teori, tetapi juga memberikan studi kasus nyata dan sesi tanya jawab interaktif yang memungkinkan peserta untuk berkonsultasi langsung dengan para ahli. Antusiasme peserta terlihat jelas dari banyaknya pertanyaan yang diajukan.</p>
        <p>Dengan kesuksesan acara ini, BEM USU berharap dapat terus menginspirasi dan memfasilitasi mahasiswa untuk berani melangkah ke dunia wirausaha, serta memberikan kontribusi nyata bagi perekonomian digital Indonesia.</p>
    `
};

const relatedPosts = [
    { slug: "mahasiswa-usu-raih-medali-emas", image: "/img/news2.png", category: "PRESTASI", title: "Mahasiswa USU Raih Medali Emas di Kompetisi Sains Internasional" },
    { slug: "pentingnya-peran-mahasiswa", image: "/img/news.png", category: "OPINI", title: "Pentingnya Peran Mahasiswa sebagai Agen Perubahan Sosial" },
    { slug: "pengabdian-masyarakat-di-desa-binaan", image: "/img/news1.png", category: "KEGIATAN KAMPUS", title: "Program Pengabdian Masyarakat di Desa Binaan Berjalan Lancar" },
];


export default function DetailBeritaPage({ params }: { params: { id: string }}) {
    const post = articleData;

    return (
        <div className="bg-white text-slate-800">
            <div className="container mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <nav className="mb-8 py-4 flex items-center space-x-2 text-sm text-slate-600">
                    <Link href="/" className="hover:text-green-600"><Home size={18} /></Link>
                    <ChevronRight size={16} className="text-slate-400" />
                    <Link href="/berita" className="hover:text-green-600">Berita</Link>
                    <ChevronRight size={16} className="text-slate-400" />
                    <span className="font-semibold text-slate-800 truncate max-w-xs">{post.title}</span>
                </nav>

                {/* Header Artikel */}
                <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">{post.title}</h1>
                        <div className="mt-4 text-slate-600 text-sm">
                            <span>Oleh {post.author}</span>
                            <span className="mx-2">&bull;</span>
                            <span>{post.publishDate}</span>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </header>

                <hr className="max-w-4xl mx-auto my-12 border-slate-200" />

                {/* Konten Artikel & Share Sidebar */}
                <div className="relative max-w-4xl mx-auto">
                    <aside className="hidden md:block absolute top-0 left-0 -translate-x-full pr-12">
                        <div className="sticky top-24 flex flex-col items-center space-y-4">
                            <a href="#" className="text-slate-500 hover:text-blue-600"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-500 hover:text-sky-500"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-500 hover:text-pink-600"><Instagram size={20} /></a>
                        </div>
                    </aside>

                    {/* Body Artikel */}
                    <article className="prose prose-lg max-w-none prose-p:text-slate-700 prose-h2:text-slate-800 prose-blockquote:text-green-700 prose-blockquote:border-green-600">
                        {post.subtitle && (
                            <p className="text-xl md:text-2xl leading-relaxed text-green-700 font-serif italic mb-8">
                                &ldquo;{post.subtitle}&rdquo;
                            </p>
                        )}
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    </article>

                     {/* Share Buttons (Hanya Mobile) */}
                    <div className="md:hidden mt-12 pt-6 border-t border-slate-200">
                        <p className="text-base font-semibold text-slate-800 mb-4">Bagikan Artikel Ini</p>
                        <div className="flex items-center space-x-5">
                            <a href="#" className="text-slate-500"><Facebook /></a>
                            <a href="#" className="text-slate-500"><Twitter /></a>
                            <a href="#" className="text-slate-500"><Instagram /></a>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <section className="max-w-7xl mx-auto mt-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Berita Lainnya</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((related, index) => (
                            <Link href={`/berita/${related.slug}`} key={index} className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                                <Image src={related.image} alt={related.title} width={400} height={300} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <p className="text-sm font-semibold text-green-700 mb-2">{related.category}</p>
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors">{related.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}