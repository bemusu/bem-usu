import { Card } from '../ui/card'
import { LogoPhilosophyProps } from "@/lib/types";
import StrapiImage from "../StrapiImage";


const LogoPhilosophy = ({
    title,
    main_logo,
    logo_name,
    logo_description,
    philosophy_items,
}: Readonly<LogoPhilosophyProps>) => {
    return (
        <div className="mb-20 md:mb-28">
            <Card className="bg-gradient-to-br from-white/80 to-slate-100/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200">
                <div className="p-8 md:p-12">

                    {/* Judul utama */}
                    <h2 className="text-4xl font-bold text-slate-800 text-center md:text-left mb-12">
                        {title}
                    </h2>

                    <div className="flex flex-col md:flex-row md:gap-12">
                        <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-300 flex flex-col items-center justify-center px-6 pb-10 md:pb-0">
                            <StrapiImage
                                src={main_logo.url}
                                alt={main_logo.alternativeText || "logo-bem-usu"}
                                className="rounded-xl shadow-md mb-6"
                                width={160}
                                height={160}
                            />
                            <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">
                                {logo_name}
                            </h3>
                            <p className="text-slate-600 text-center max-w-xs">
                                {logo_description}
                            </p>
                        </div>

                        <div className="md:w-2/3 pt-10 md:pt-0 px-6">
                            <div className="space-y-10">
                                {philosophy_items.map(item => (
                                    <div key={item.id} className="flex items-start gap-6">
                                        <div className="w-20 h-20 rounded-xl bg-yellow-50 flex items-center justify-center shadow-inner shrink-0">
                                            <StrapiImage
                                                src={item.icon.url}
                                                alt={item.icon.alternativeText || item.title.toLowerCase()}
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-xl text-slate-800">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 mt-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LogoPhilosophy