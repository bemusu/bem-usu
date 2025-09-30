import { AboutSectionProps } from "@/lib/types"
import StrapiImage from "../StrapiImage"

const AboutSection = ({
    heading,
    description_1,
    description_2,
    logo_image_1,
    logo_image_2
}: Readonly<AboutSectionProps>) => {
    return (
        <section className="py-8 px-4">
            <div className="bg-white/50 backdrop-blur-md text-gray-800 rounded-2xl shadow-xl p-8 md:p-16 space-y-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{heading}</h2>
                </div>

                <div className="space-y-16">
                    
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Diubah menjadi 1/2 */}
                        <div className="md:w-1/2">
                            <p className="text-base md:text-lg leading-relaxed text-justify">
                                {description_1}
                            </p>
                        </div>
                        {/* Diubah menjadi 1/2 */}
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                            <StrapiImage
                                src={logo_image_2?.url || "/img/bem_usu.png"}
                                alt={logo_image_2?.alternativeText || "Logo BEM USU"}
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                        {/* Diubah menjadi 1/2 */}
                        <div className="md:w-1/2">
                            <p className="text-base md:text-lg leading-relaxed text-justify">
                                {description_2}
                            </p>
                        </div>
                        {/* Diubah menjadi 1/2 */}
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                            <StrapiImage
                                src={logo_image_1.url}
                                alt={logo_image_1.alternativeText}
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection