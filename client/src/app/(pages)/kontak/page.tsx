import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

type FormInputProps = {
    placeholder: string;
    type?: string;
};

const FormInput: React.FC<FormInputProps> = ({ placeholder, type = "text" }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-green-600 focus:ring-0 transition-colors pb-2"
    />
);

type FormTextareaProps = {
    placeholder: string;
    rows?: number;
};

const FormTextarea: React.FC<FormTextareaProps> = ({ placeholder, rows = 4 }) => (
    <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-green-600 focus:ring-0 transition-colors pb-2"
    />
);

// KOMPONEN HALAMAN UTAMA
export default function ContactPage() {
    return (
        <div>
            <section
                className="relative text-white text-center py-40 px-6"
                style={{
                    backgroundImage: "url('/img/gambar kabinet.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold tracking-wide leading-tight">KABINET AKSI BERSAMA</h1>
                    <h2 className="text-4xl font-bold mt-2">BEM USU 2024/2025</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat
                    </p>
                </div>
            </section>

            {/* Konten Utama dalam Card */}
            <div className="container mx-auto px-6 py-20 md:py-28">
                <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Kolom Kiri: Informasi Kontak */}
                        <div className="p-8 md:p-12 text-slate-800 flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold">Contact Information</h2>
                                <p className="text-slate-600 mt-2">Say something to start a live chat!</p>
                            </div>

                            <ul className="space-y-6 mt-10">
                                <li className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-slate-600 shrink-0" />
                                    <span>+62 812 3456 789</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-slate-600 shrink-0" />
                                    <a href="mailto:bemusu@gmail.com" className="hover:text-green-700">bemusu@gmail.com</a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                                    <span>Jalan Dr. T. Mansur No.9, Padang Bulan, Medan Baru, Kota Medan, Sumatera Utara 20222</span>
                                </li>
                            </ul>

                            <div className="mt-auto pt-12 flex space-x-4">
                                <a href="#" className="p-3 bg-slate-200/50 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-slate-200/50 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-slate-200/50 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Kolom Kanan: Formulir */}
                        <div className="p-8 md:p-12 border-l border-slate-200/80">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FormInput placeholder="Nama" />
                                    <FormInput placeholder="NIM" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FormInput placeholder="Fakultas" />
                                    <FormInput placeholder="Prodi" />
                                </div>
                                <FormInput placeholder="No Whatsapp (+628...)" />
                                <FormInput placeholder="Kategori Masalah" />
                                <FormInput placeholder="Tanggal Kejadian" type="date" />
                                <FormTextarea placeholder="Tulis Pesan..." />

                                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-700 transition-colors text-base py-6 rounded-lg">
                                    Kirim Pesan
                                </Button>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}