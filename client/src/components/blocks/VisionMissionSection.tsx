import Image from "next/image"
import { Card } from "../ui/card"
import { ChevronRight } from "lucide-react";
import { VisionMissionSectionProps } from "@/lib/types";
import StrapiImage from "../StrapiImage";

const misiList = [
    "Mewujudkan internal BEM USU yang kuat, sinergis, harmonis, dan berkualitas.",
    "Meningkatkan kolaborasi dan solidaritas antar ORMAWA.",
    "Melaksanakan tugas pengelolaan BEM USU yang transparan dan akuntabel.",
    "Memfasilitasi pengembangan akademik, minat, dan bakat mahasiswa.",
    "Memperjuangkan hak mahasiswa dan aktif merespon isu-isu strategis."
];

const VisionMissionSection = ({
    eyebrow_title,
    vision_title,
    vision_description,
    mission_title,
    mission_items,
    image
}: Readonly<VisionMissionSectionProps>) => {
    return (
        <div className="mb-20 md:mb-28">
            <Card className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <p className="font-bold text-green-500 uppercase tracking-widest text-sm mb-4">{eyebrow_title}</p>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-slate-800">
                                    {vision_title}
                                </h2>
                                <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                                    {vision_description}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-slate-800">
                                    {mission_title}
                                </h2>
                                <ul className="mt-6 space-y-4">
                                    {mission_items.slice(0, 4).map(item => (
                                        <li key={item.id} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                <ChevronRight className="w-5 h-5 text-green-600" />
                                            </span>
                                            <span className="text-slate-600">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
                            <StrapiImage
                                src={image.url}
                                alt={image.alternativeText || "img"}
                                className="rounded-2xl"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default VisionMissionSection